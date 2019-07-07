import * as actions from "./actions";

const innerState = {
  counter: 0
};

export default (state = innerState, action) => {
  switch (action.type) {
    case actions.UP_COUNT:
      return state;
    case actions.DOWN_COUNT:
      return state;
    default:
      return state;
  }
};
