import React from 'react';
import logo from './logo.svg';
import "bootswatch/dist/sketchy/bootstrap.min.css"; 
import './App.css';
import Money from './Money.js';
import Student from './Student.js';
import World from './World.js';
import Debt from './Debt.js';
import { generateKeyPairSync } from 'crypto';

const APR = 1.01;
const GRACE = 3;

class App extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {balance: 0, income: 1000, score: 500, debts: [],
                  month: today.getMonth(), year: today.getFullYear(),
                  health: 100};
    this.money = new Money();
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
    this.state.debts.forEach(debt => {
      // Check for overdue payments
      if (this.state.year * 12 + this.state.month >= debt.year * 12 + debt.month) {
        // Compound interest
        debt.cost *= APR;
        // Subtract credit
        this.setState({score: this.state.score - 10});
      }
    });
    // Update health
    this.setState({health: this.state.health - 5});
  }

  /**
   * Invest in the business.
   */
  invest() {
    var cost = this.state.income * 10;
    // Check if max credit per turn won't be exceeded
    if (cost - this.state.balance <= this.state.balance / 2 * this.state.score / 1000) {
      var month = this.state.month + GRACE;
      var year = this.state.year;
      if (month >= 12) {
        month %= 12;
        year++;
      }
      this.setState({debts: [...this.state.debts, new Debt('Business investment', cost, year, month)]});
      this.setState({income: this.state.income * 2});
    }
  }

  /**
   * Get a text representation of the month and year.
   */
  date() {
    var date = new Date(this.state.year, this.state.month);
    return date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear();
  }

  render() {
    return (
      <div id="content">
        <Student health={this.state.health}/>
        <Money parent={this} income={this.state.income} balance={this.state.balance} score={this.state.score} date={this.date()} debts={this.state.debts}/>
        <World />
        <div id="buttons">
          <button onClick={() => this.advance()} type="button" className="btn btn-info">Next</button>
            &nbsp;&nbsp;
          <button onClick={() => this.invest()} type="button" className="btn btn-info">Invest (${this.state.income * 10})</button>
        </div>
      </div>
    );
  }
}

export default App;
