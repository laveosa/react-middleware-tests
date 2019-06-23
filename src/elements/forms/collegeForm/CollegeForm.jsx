import React from "react";
import "./styles.scss";

class CollegeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1
    };
  }
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
                      onChange={() => {
                        this.setState({ status: this.refs.status.value });
                      }}
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
          <div className="button-area d-flex align-items-center justify-content-end">
            <button
              className="btn btn-primary m-1 w-50 text-uppercase"
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
    this.refs.name.value = "Hogwarts";
    this.refs.address.value = "Srednaya 35/26";
    this.setState({ state: 4 });
  };
  addHandler = () => {
    const newCollege = {
      name: this.refs.name.value,
      address: this.refs.address.value,
      status: this.state.status
    };

    console.log(newCollege);

    this.props.addCollege(newCollege);
    this.clearHandler();
  };
  clearHandler = () => {
    this.refs.name.value = null;
    this.refs.address.value = null;
    this.setState({ state: 1 });
  };
}

export default CollegeForm;
