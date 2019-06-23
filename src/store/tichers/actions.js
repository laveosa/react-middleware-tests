export const ADD_TICHER = "ADD_TICHER";
export const MANAGE_TICHER = "MANAGE_TICHER";
export const REMOVE_TICHER = "REMOVE_TICHER";

export const addTicher = ticher => {
  return {
    type: ADD_TICHER,
    payload: ticher
  };
};

export const manageTicher = (ticher, index) => {
  return {
    type: MANAGE_TICHER,
    payload: {
      index: index,
      ticher: ticher
    }
  };
};

export const removeTicher = index => {
  return {
    type: REMOVE_TICHER,
    payload: index
  };
};
