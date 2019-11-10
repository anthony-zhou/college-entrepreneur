import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {health: "100%"};
  }

  type() {
    return "progress-bar progress-bar-striped progress-bar-animated " + "bg-success";
  }
  
  render() {
    return (
      <div className="progress">
        <div className={this.type()} role="progressbar" style={{width: this.state.health}}></div>
      </div>
    );
  }
}

export default Student;
