export const UP_COUNT = "UP_COUNT";
export const DOWN_COUNT = "DOWN_COUNT";

export function upCountAsync(val) {
  return dispatch => {
    console.log(UP_COUNT, val);

    return dispatch(upCount(val));
  };
}

export function upCount(val) {
  return {
    type: UP_COUNT,
    payload: val
  };
}

export function downCountAsunc(val) {
  console.log(DOWN_COUNT, val);

  return dispatch(downCount(val));
}

export function downCount(val) {
  return {
    type: DOWN_COUNT,
    payload: val
  };
}
