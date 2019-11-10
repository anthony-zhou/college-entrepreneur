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
    this.state = {month: today.getMonth(), year: today.getFullYear()};
  }

  /**
   * Advance the clock by one month.
   */
  advance() {
    // Update internal time state
    this.state.month++;
    if (this.state.month == 12) {
      this.state.month = 0;
      this.state.year++;
    }
    this.setState({month: this.state.month, year: this.state.year});
    // TODO: Update money
    // TODO: Update health
  }

  date() {
    var date = new Date(this.state.year, this.state.month);
    return date.toLocaleString('default', {month: 'long'}) + ' ' + date.getFullYear();
  }

  render() {
    return (
      <div>
        <Student />
        <Money date={this.date()}/>
        <World />
        <button onClick={() => this.advance()} type="button" className="btn btn-info">Next</button>
      </div>
    );
  }
}

export default App;
