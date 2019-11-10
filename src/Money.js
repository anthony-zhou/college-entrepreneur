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
      const {description, cost} = debt;
      return (
        <tr className="table-active">
          <th scope="row">{description}</th>
          <th>${cost}</th>
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
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2>{this.props.date}</h2>
          <h1 className="display-3">${parseFloat(this.props.balance * 100 / 100).toFixed(2)}</h1>
        </div>
        <div className="jumbotron">
          <h2>Credit Score</h2>
          <h1 className="display-3">{this.props.score}</h1>
          <h2>Max Credit Per Turn</h2>
          <h1 className="display-3">{this.props.balance / 2 * this.props.score / 1000}</h1>
        </div>
        <div className="jumbotron">
          <h2>Outstanding Debts</h2>
          <table>
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
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
