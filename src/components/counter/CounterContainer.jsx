import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class CounterContainer extends React.Component {
  render() {
    return (
      <Counter
        count={this.props.count}
        upCount={this.props.upCountAsync}
        downCount={this.props.downCounAsync}
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
    upCountAsync: val => {
      dispatch(actions.upCountAsync(val));
    },
    downCounAsync: val => {
      dispatch(actions.downCountAsunc(val));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
