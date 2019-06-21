import React from "react";
import StudentFormContainer from "../../elements/forms/studentForm/StudentFormContainer";
import TicherFormContainer from "../../elements/forms//ticherForm/TicherFormContainer";
import CollegeFormContainer from "../../elements/forms/collegeForm/CollegeFormContainer";
import "./styles.scss";

class Home extends React.Component {
  render() {
    return (
      <div id="HomeComponent">
        <div className="home-container container-fluid row m-0 p-0">
          <div className="form-cover col-4 p-0">
            <StudentFormContainer />
          </div>
          <div className="form-cover col-4 p-0">
            <TicherFormContainer />
          </div>
          <div className="form-cover col-4 p-0">
            <CollegeFormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
