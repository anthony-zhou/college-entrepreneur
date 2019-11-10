import React from 'react';

class Money extends React.Component {
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
        </div>
        <div className="jumbotron">
          <h2>Outstanding Debts</h2>
          <h1 className="display-3">{this.props.debts}</h1>
        </div>
      </div>
    );
  }
}

export default Money;
