import React from 'react';
import logo from './logo.svg';
import "./bootstrap.min.css";
import './App.css';
import Money from './Money.js';
import Student from './Student.js';
import World from './World.js';
import Debt from './Debt.js';
import LongTermDebt from './LongTermDebt.js';
import Intro from './Intro.js';
import { generateKeyPairSync } from 'crypto';

const APR = 1.01;
const GRACE = 3;
const COLOR = '#F0E9D8'

class App extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date();
    this.state = {balance: 0, income: 5000, score: 500, debts: [new LongTermDebt("Student Loans", 60000, today.getFullYear() + 10, today.getMonth())],
                  month: today.getMonth(), year: today.getFullYear(),
                  health: 100};
    document.body.style = 'background: ' + COLOR;
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

        if(LongTermDebt.prototype.isPrototypeOf(debt)) {
          debt.monthlyPayment = ((APR-1) * debt.cost) / (1 - Math.pow(APR, -12));
        }
          // Subtract credit
          this.setState({score: this.state.score - 10});
        
      }
    });
    // Update health
    this.setState({health: this.state.health - 10});

    if(this.state.score < 400 || this.state.health <= 0) {
      Intro.lose();
    }
    if(this.state.balance > 50000) {
      Intro.win();
    }

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
        <Intro></Intro>
        <Student health={this.state.health}/>
        <Money parent={this} income={this.state.income} balance={this.state.balance} score={this.state.score} date={this.date()} debts={this.state.debts}/>
        <World parent={this}/>
        <div id="buttons">
          <button onClick={() => this.advance()} type="button" className="btn btn-info">Next Month</button>
            &nbsp;&nbsp;
          <button onClick={() => this.invest()} type="button" className="btn btn-info">Invest (${this.state.income * 10})</button>
        </div>
      </div>
    );
  }
}

export default App;
