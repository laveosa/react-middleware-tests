import React from "react";
import { connect } from "react-redux";
import CollegeForm from "./CollegeForm";
import { addCollege } from "../../../store/colleges/actions";

class CollegeFormContainer extends React.Component {
  render() {
    return <CollegeForm addCollege={this.props.addCollege} />;
  }
}

const mapStateToProps = state => {
  return {
    colleges: state.colleges.colleges
  };
};

const mapDispatchToProps = {
  addCollege
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollegeFormContainer);
