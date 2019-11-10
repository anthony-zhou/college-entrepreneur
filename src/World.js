import React, { Component } from 'react';
class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {event: props.event};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var random = Math.random();
  }

  render() {
    return (
      <div>
        {this.state.event}
      </div>
    );
  }
}

export default World;
