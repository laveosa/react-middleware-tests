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
      dispatch({
        type: actions.UP_COUNT_ASYNC,
        payload: val
      });
    },
    downCount: val => {
      dispatch({
        type: actions.DOWN_COUNT_ASYNC,
        payload: val
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
