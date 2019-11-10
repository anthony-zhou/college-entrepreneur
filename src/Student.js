import React from 'react';

class Student extends React.Component {
  type() {
    var type;
    var percent = this.props.health;
    if (percent > 50)
    {
      type = "bg-success";
    }
    else if (percent > 25)
    {
      type = "bg-warning";
    }
    else
    {
      type = "bg-danger";
    }
    return "progress-bar progress-bar-striped progress-bar-animated " + type;
  }
  
  render() {
    return (
      <div className="progress">
        <div className={this.type()} role="progressbar" style={{width: this.props.health + "%"}}></div>
      </div>
    );
  }
}

export default Student;
