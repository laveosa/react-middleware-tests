import React from "react";

export default props => {
  return (
    <div className="counter-container container">
      <div className="jumbotron d-flex flex-column mt-5">
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
};
