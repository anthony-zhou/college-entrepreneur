import React from 'react';
import './World.css';

class World extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="modal-dialog mw-100 w-50" role="document">
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
      </section>
    );
  }
}

export default World;
