import React from 'react';
import './Student.css';

/**
 * Stores the health of the student.
 */
class Student extends React.Component {
  /**
   * Dynamically change color of progress bar based on current health.
   */
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
