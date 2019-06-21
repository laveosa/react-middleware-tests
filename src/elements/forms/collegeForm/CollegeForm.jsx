import React from "react";
import "./styles.scss";

class CollegeForm extends React.Component {
  render() {
    const statusAmount = [{}, {}, {}, {}];
    return (
      <div id="CollegeForm">
        <div className="college-form m-3 p-3 border">
          <div className="form-group">
            <label className="badge badge-secondary">college name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter name..."
              ref="name"
            />
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">college address:</label>
            <input
              type="address"
              className="form-control"
              placeholder="enter address..."
              ref="address"
            />
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">college status:</label>
            <div className="">
              {statusAmount.map((elem, index) => {
                return (
                  <div key={index} className="form-check form-check-inline">
                    <input
                      id={"Status" + index + 1}
                      className="form-check-input"
                      type="radio"
                      name="status"
                      ref="status"
                      value={index + 1}
                    />
                    <label
                      htmlFor={"Status" + index + 1}
                      className="form-check-label"
                    >
                      {index + 1}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="button-area">
            <div className="btn btn-success">add</div>
            <div className="btn btn-secondary">clear</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollegeForm;
