import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="counter-container container">
        <div className="jumbotron d-flex flex-column">
          <div className="count-cover mb-3 text-center">
            <h1>0</h1>
          </div>
          <div className="buttons-area d-flex justify-content-center">
            <button className="btn btn-primary w-25 m-1 text-uppercase">
              up
            </button>
            <button className="btn btn-primary w-25 m-1 text-uppercase">
              down
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
