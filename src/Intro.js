import React, { Component } from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  static lose() {
    document.getElementById("lose").classList.remove("hidden");
    document.getElementById("lose").classList.add("visible");
    console.log("HELLO");
  }
  static win() {
    document.getElementById("win").classList.add("visible");
  }
  render() {
    return (
      <div>
        <div id="intro" className = "fullscreen visible">
          <h1>You are not a loan.</h1>
          <p>This is a game to help improve your financial literacy. First, take this <a target="_blank" href="https://www.surveymonkey.com/r/L3TLBXH">financial literacy survey</a>. Then, learn about personal finance by playing the game. You can win by gaining an account balance of more than $50000, and lose by getting a credit score of less than 350 or a health level below zero. </p>
          <p>Here are some terms you might want to know:</p>
          <ul class="leftAlign">
            <li><b>Interest:</b> the fee you pay a money lender for borrowing money. In the game, interest is automatically compounded at a fixed Annual Percentage Rate (APR) of 1%.</li>
            <li><b>Credit:</b> an arrangement where goods, services, or money are exchanged for a promise of repayment at a later date.</li>
            <li><b>Credit Score:</b> for money lenders, this is a measure of how trustworthy an individual is, based on how well the individual has payed back loans and credit in the past. You will need a good credit score to take out loans.</li>
            <li><b>Maximum credit:</b> the amount you are allowed to take from a credit card, which may be greater than your account balance, though this will incur debt.</li>
          </ul>
          <p><a href="#" onClick={fadeout}>Enter the game -></a></p>
        </div>
        <div id="lose" className = "fullscreen hidden">
          <h1>You lost!</h1>
          <p>Thanks for playing the game. We hoped you learned a lot. Please take this <a target="_blank" href="https://www.surveymonkey.com/r/LP2FLTR">post-game survey</a> to help us promote financial literacy. Then, <a href="/college-entrepreneur">play again!</a></p>
        </div>
        <div id="win" className = "fullscreen hidden">
          <h1>You won!</h1>
          <p>Congrats on your awesome money-management skills! Please take this <a target="_blank" href="https://www.surveymonkey.com/r/LP2FLTR">post-game survey</a> to help us promote financial literacy. Then, <a href="/college-entrepreneur">play again!</a></p>
        </div>
      </div>
    );
  }
}
function fadeout() {
  document.getElementById("intro").classList.add("hidden");
}

export default Intro;
