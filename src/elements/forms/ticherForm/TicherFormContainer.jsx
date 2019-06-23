import React from "react";
import TicherForm from "./TicherForm";
import { connect } from "react-redux";
import * as ticherActions from "../../../store/tichers/actions";

class TicherFormContainer extends React.Component {
  render() {
    return <TicherForm addTicher={this.props.addTicher} />;
  }
}

const mapStateToProps = state => {
  return {
    tichers: state.tichers
  };
};

const mapDispatchToProps = {
  addTicher: ticherActions.addTicher
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicherFormContainer);
