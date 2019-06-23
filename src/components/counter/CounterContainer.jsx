import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";

class CounterContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter
          title="students"
          count={this.props.studentCount ? this.props.studentCount.length : 0}
        />
        <Counter
          title="tichers"
          count={this.props.tichersCount ? this.props.tichersCount.length : 0}
        />
        <Counter
          title="colleges"
          count={this.props.collegesCount ? this.props.collegesCount.length : 0}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentCount: state.students.students,
    tichersCount: state.tichers.tichers,
    collegesCount: state.colleges.colleges
  };
};

export default connect(mapStateToProps)(CounterContainer);
