import React from 'react';
import logo from './logo.svg';
import "bootswatch/dist/sketchy/bootstrap.min.css"; 
import './App.css';
import Money from './Money.js';
import Student from './Student.js';
import World from './World.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {balance: 0, income: 1000, score: 500,
                  month: today.getMonth(), year: today.getFullYear(),
                  health: 100};
  }

  /**
   * Advance the clock by one month.
   */
  advance() {
    // Update internal time state
    var month = this.state.month + 1;
    var year = this.state.year;
    if (month === 12) {
      month = 0;
      year++;
    }
    this.setState({month: month, year: year});
    // Update money and credit
    var income = Math.sqrt(this.state.health / 100.0) * this.state.income;
    this.setState({balance: this.state.balance + income});
    // Update health
    this.setState({health: this.state.health - 5});
  }

  date() {
    var date = new Date(this.state.year, this.state.month);
    return date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear();
  }

  render() {
    return (
      <div>
        <Student health={this.state.health}/>
        <Money balance={this.state.balance} score={this.state.score} date={this.date()}/>
        <World />
        <button onClick={() => this.advance()} type="button" className="btn btn-info">Next</button>
      </div>
    );
  }
}

export default App;
