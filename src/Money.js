import React from 'react';

/**
 * Stores the balance, credit score, and outstanding debts.
 */
class Money extends React.Component {
  /**
   * Generate a table of outstanding debts.
   */
  debts() {
    return this.props.debts.map((debt, index) => {
      const {description, cost, tenYearAnnuityPayment} = debt;
      var date = new Date(debt.year, debt.month);
      return (
        <tr key={index} className="table-active">
          <th scope="row">{description}</th>
          <th>${parseFloat(cost * 100 / 100).toFixed(2)}</th>
          <th>${parseFloat(tenYearAnnuityPayment).toFixed(2)}</th>
          <th>{date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear()}</th>
          <th><button onClick={() => this.pay(debt)} type="button" className="btn btn-info">Pay</button></th>
        </tr>
      )
    });
  }

  /**
   * Pay off a debt.
   */
  pay(debt) {
    if (this.props.balance >= debt.cost) {
      this.props.debts.splice(this.props.debts.indexOf(debt), 1);
      this.props.parent.setState({balance: this.props.balance - debt.cost});
      if (debt.year >= this.props.parent.state.year && debt.month >= this.props.parent.state.month) {
        console.log(debt.year + ' ' + debt.month + '/' + this.props.parent.state.year + ' ' + this.props.parent.state.month)
        this.props.parent.setState({score: this.props.score + 10});
      }
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2>{this.props.date}</h2>
          <h1 className="display-3">${parseFloat(this.props.balance * 100 / 100).toFixed(2)}</h1>
          <h2>Max Income Per Month</h2>
          <h1 className="display-3">${this.props.income}</h1>
        </div>
        <div className="jumbotron">
          <h2>Credit Score</h2>
          <h1 className="display-3">{this.props.score}</h1>
          <h2>Max Credit Per Month</h2>
          <h1 className="display-3">{parseFloat(this.props.balance / 2 * this.props.score / 1000).toFixed(2)}</h1>
        </div>
        <div className="jumbotron">
          <h2>Outstanding Debts</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Total</th>
                <th scope="col">Monthly amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {this.debts()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Money;
