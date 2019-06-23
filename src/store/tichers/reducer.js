import * as ticherActions from "./actions";

const innerState = {
  tichers: []
};

export default (state = innerState, action) => {
  switch (action.type) {
    case ticherActions.ADD_TICHER:
      return Object.assign({}, state, {
        tichers: [...state.tichers, action.payload]
      });
    case ticherActions.MANAGE_TICHER:
      return { ...state };
    case ticherActions.REMOVE_TICHER:
      return { ...state };
    default:
      return state;
  }
};
