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
          <p>First, take this <a target="_blank" href="https://www.surveymonkey.com/r/L3TLBXH">financial literacy survey</a>. Then, learn about personal finance by <a href="#" onClick={fadeout}>playing the game</a>.</p>
        </div>
        <div id="lose" className = "fullscreen hidden">
          <h1>You lost!</h1>
          <p>Thanks for playing the game. We hoped you learned a lot. Please take this <a target="_blank" href="https://www.surveymonkey.com/r/LP2FLTR">post-game survey</a> to help us promote financial literacy. Then, <a href="/">play again!</a></p>
        </div>
        <div id="win" className = "fullscreen hidden">
          <h1>You won!</h1>
          <p>Congrats on your awesome money-management skills! Please take this <a target="_blank" href="https://www.surveymonkey.com/r/LP2FLTR">post-game survey</a> to help us promote financial literacy. Then, <a href="/">play again!</a></p>
        </div>
      </div>
    );
  }
}
function fadeout() {
  document.getElementById("intro").classList.add("hidden");
}

export default Intro;
