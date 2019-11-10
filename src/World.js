import React from 'react';
import RandomEvent from './RandomEvent';

class World extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var e = RandomEvent.generate();
    return (
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <h2>{e.description}</h2>
        <p>{e.cost}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary btn-success">Yes</button>
        <button type="button" className="btn btn-primary btn-danger" data-dismiss="modal">No</button>
    </div>
  </div>
</div>
    );
  }
}

export default World;
