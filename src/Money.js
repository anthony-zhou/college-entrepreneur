import React from 'react';

class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = {balance: 0, score: 700, debts: []};
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2>{this.props.date}</h2>
          <h1 className="display-3">${this.state.balance}</h1>
        </div>
        <div className="jumbotron">
          <h2>Credit Score</h2>
          <h1 className="display-3">{this.state.score}</h1>
        </div>
        <div className="jumbotron">
          <h2>Outstanding Debts</h2>
          <h1 className="display-3">{this.state.debts}</h1>
        </div>
      </div>
    );
  }
}

export default Money;
