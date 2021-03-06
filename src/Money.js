import React from 'react';
import './Money.css';

const COLOR = "#E6E0CF";

/**
 * Stores the balance, credit score, and outstanding debts.
 */
class Money extends React.Component {
  /**
   * Generate a table of outstanding debts.
   */
  debts() {
    return this.props.debts.map((debt, index) => {
      const {description, cost, monthlyPayment} = debt;
      var date = new Date(debt.year, debt.month);
      return (
        <tr key={index} className="table-active">
          <th style={{backgroundColor: COLOR}} scope="row">{description}</th>
          <th style={{backgroundColor: COLOR}}>${parseFloat(cost * 100 / 100).toFixed(2)}</th>
          <th style={{backgroundColor: COLOR}}>${parseFloat(monthlyPayment).toFixed(2)}</th>
          <th style={{backgroundColor: COLOR}}>{date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear()}</th>
          <th style={{backgroundColor: COLOR}}><button onClick={() => this.pay(debt)} type="button" className="btn btn-info">Pay</button></th>
        </tr>
      )
    });
  }

  /**
   * Pay off a debt.
   */
  pay(debt) {
    if (this.props.balance >= debt.monthlyPayment) {
      this.props.parent.setState({balance: this.props.balance - debt.monthlyPayment});
      debt.cost -= debt.monthlyPayment;
      if(debt.cost === 0) {
        this.props.debts.splice(this.props.debts.indexOf(debt), 1);
      }
      if (debt.year >= this.props.parent.state.year && debt.month >= this.props.parent.state.month) {
        this.props.parent.setState({score: this.props.score + 10});
      }
    } else {
      //TODO: implement alert telling user they don't have enough money to pay the debt
    }
  }

  render() {
    return (
      <section>
        <article id="balance" className="jumbotron">
          <h2>{this.props.date}</h2>
          <h1 className="display-3">${parseFloat(this.props.balance * 100 / 100).toFixed(2)}</h1>
          <h2>Max Income Per Month</h2>
          <h1 className="display-3">${this.props.income}</h1>
        </article>
        <article id="credit" className="jumbotron">
          <h2>Credit Score</h2>
          <h1 className="display-3">{this.props.score}</h1>
          <h2>Max Credit Per Month</h2>
          <h1 className="display-3">{parseFloat(this.props.balance / 2 * this.props.score / 1000).toFixed(2)}</h1>
        </article>
        <article id="debt" className="jumbotron">
          <h2>Outstanding Debts</h2>
          <table className="table-striped" cellPadding="10">
            <thead>
              <tr>
                <th style={{backgroundColor: COLOR}} scope="col">Description</th>
                <th style={{backgroundColor: COLOR}} scope="col">Total</th>
                <th style={{backgroundColor: COLOR}} scope="col">Monthly amount</th>
                <th style={{backgroundColor: COLOR}} scope="col">Due</th>
              </tr>
            </thead>
            <tbody>
              {this.debts()}
            </tbody>
          </table>
        </article>
      </section>
    );
  }
}

export default Money;
