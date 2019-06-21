import React from "react";
import StudentForm from "./StudentForm";
import { connect } from "react-redux";
import { addStudent } from "../../../store/students/action";

class StudentFormContainer extends React.Component {
  render() {
    return <StudentForm addStudent={this.props.addStudent} />;
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = {
  addStudent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentFormContainer);
