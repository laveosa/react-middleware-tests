import React from "react";
import "./styles.scss";

class TicherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "1"
    };
  }
  componentWillMount() {}
  render() {
    return (
      <div id="TicherForm">
        <div className="ticher-form m-3 p-3 border bg-white">
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
                  checked
                  onChange={event => {
                    this.setState({ gender: event.target.value });
                  }}
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
                  onChange={event => {
                    this.setState({ gender: event.target.value });
                  }}
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
            <button
              className="btn btn-primary m-1 w-25 text-uppercase"
              onClick={this.generateHandler}
            >
              generate
            </button>
            <button
              className="btn btn-success m-1 w-25 text-uppercase"
              onClick={this.addHandler}
            >
              add
            </button>
            <button
              className="btn btn-secondary m-1 w-25 text-uppercase"
              onClick={this.clearHandler}
            >
              clear
            </button>
          </div>
        </div>
      </div>
    );
  }
  generateHandler = () => {
    this.refs.name.value = "Gary";
    this.refs.familyName.value = "Stannerpo";
    this.refs.age.value = "67";
    this.refs.gender.value = "1";
    this.setState({ gender: "1" });
    this.refs.facult.value = "IT";
    this.refs.experience.value = "35";
  };
  addHandler = () => {
    const newTicher = {
      name: this.refs.name.value,
      familyName: this.refs.familyName.value,
      age: this.refs.age.value,
      gender: this.state.gender,
      facult: this.refs.facult.value,
      course: this.refs.experience.value
    };

    this.props.addTicher(newTicher);
    this.clearHandler();
  };
  clearHandler = () => {
    this.refs.name.value = null;
    this.refs.familyName.value = null;
    this.refs.age.value = null;
    this.refs.gender.value = null;
    this.refs.facult.value = null;
    this.refs.experience.value = null;
  };
}

export default TicherForm;
