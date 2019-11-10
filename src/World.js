import React from 'react';

class World extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <h1>Event</h1>
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
