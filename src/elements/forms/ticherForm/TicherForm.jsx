import React from "react";
import "./styles.scss";

class TicherForm extends React.Component {
  render() {
    return (
      <div id="TicherForm">
        <div className="ticher-form m-3 p-3 border">
          <div className="form-group">
            <label className="badge badge-secondary">name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="enter name..."
              ref="name"
            />
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">family name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="enter name..."
              ref="familyName"
            />
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">age:</label>
            <input
              className="form-control"
              type="number"
              placeholder="enter age..."
              ref="age"
            />
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">gender:</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  id="Male"
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  ref="gender"
                  value="1"
                />
                <label htmlFor="Male" className="form-check-label">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  id="Female"
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  ref="gender"
                  value="2"
                />
                <label htmlFor="Female" className="form-check-label">
                  female
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">facult:</label>
            <input
              className="form-control"
              type="text"
              placeholder="enter facult..."
              ref="facult"
            />
          </div>
          <div className="form-group">
            <label className="badge badge-secondary">experience:</label>
            <input
              className="form-control"
              type="text"
              placeholder="enter experience..."
              ref="experience"
            />
          </div>
          <div className="button-area d-flex align-items-center justify-content-end">
            <button className="btn btn-primary m-1 w-25 text-uppercase">
              generate
            </button>
            <button className="btn btn-success m-1 w-25 text-uppercase">
              add
            </button>
            <button className="btn btn-secondary m-1 w-25 text-uppercase">
              clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TicherForm;
