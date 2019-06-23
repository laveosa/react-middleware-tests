import * as CollegeActions from "./actions";

const innerState = {
  colleges: []
};

export default (state = innerState, action) => {
  switch (action.type) {
    case CollegeActions.ADD_COLLEGE:
      return Object.assign({}, state, {
        colleges: [...state.colleges, action.payload]
      });
    case CollegeActions.MANAGE_COLLEGE:
      return Object.assign({}, state);
    case CollegeActions.REMOVE_COLLEGE:
      return Object.assign({}, state);
    default:
      return state;
  }
};
