import * as actions from "./actions";

const innerState = {
  count: 0
};

export default (state = innerState, action) => {
  switch (action.type) {
    case actions.UP_COUNT:
      return Object.assign({}, state, {
        count: state.count + action.payload
      });
    case actions.DOWN_COUNT:
      return Object.assign({}, state, {
        count: state.count - action.payload
      });
    default:
      return state;
  }
};
