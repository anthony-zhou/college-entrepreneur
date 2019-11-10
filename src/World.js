import React from 'react';
import './World.css';
import RandomEvent from './RandomEvent';

class World extends React.Component {
  /**
   * Buy an item, increasing happiness.
   */
  buy(e) {
    if (this.props.parent.state.balance >= e.cost) {
      this.props.parent.setState({health: this.props.parent.state.health + 1});
      this.props.parent.setState({balance: this.props.parent.state.balance - e.cost});
    }
  }

  render() {
    var e = RandomEvent.generate();
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <h2>{e.description}</h2>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary btn-danger" data-dismiss="modal">No</button>
            <button onClick={() => this.buy(e)} type="button" className="btn btn-primary btn-success">Yes</button>
        </div>
      </div>
    </div>
    );
  }
}

export default World;
