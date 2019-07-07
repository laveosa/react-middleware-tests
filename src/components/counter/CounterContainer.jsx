import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class CounterContainer extends React.Component {
  render() {
    return (
      <Counter
        count={this.props.count}
        upCount={this.props.upCount}
        downCount={this.props.downCount}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upCount: val => {
      dispatch(actions.upCount(val));
    },
    downCount: val => {
      dispatch(actions.downCount(val));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
