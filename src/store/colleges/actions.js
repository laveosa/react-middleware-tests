export const ADD_COLLEGE = "ADD_COLLEGE";
export const MANAGE_COLLEGE = "MANAGE_COLLEGE";
export const REMOVE_COLLEGE = "REMOVE_COLLEGE";

export const addCollege = college => {
  return {
    type: ADD_COLLEGE,
    payload: college
  };
};

export const manageCollege = (college, index) => {
  return {
    type: MANAGE_COLLEGE,
    payload: {
      index: index,
      college: college
    }
  };
};

export const removeCollege = index => {
  return {
    type: REMOVE_COLLEGE,
    payload: index
  };
};
