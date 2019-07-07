import * as actions from "./actions";

export default store => next => action => {
  if (action.type === actions.UP_COUNT) {
    console.log("middleware UP_COUNT actions");
  }

  if (action.type === actions.DOWN_COUNT) {
    console.log("middleware DOWN_COUNT actions");
  }

  next(action);
};
