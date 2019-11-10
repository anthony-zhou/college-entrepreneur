import React, { Component } from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="intro" className = "fullscreen">
        <h1>You are not a loan.</h1>
        <p>First, take this <a href="https://www.surveymonkey.com/r/L3TLBXH">financial literacy survey</a>. Then, learn about personal finance by <a href="#" onClick={fadeout}>playing the game</a>.</p>
      </div>
    );
  }
}
function fadeout() {
  document.getElementById("intro").classList.add("fadeOut");
}
export default Intro;
