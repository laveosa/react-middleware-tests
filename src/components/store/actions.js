export const UP_COUNT = "UP_COUNT";
export const DOWN_COUNT = "DOWN_COUNT";
export const UP_COUNT_ASYNC = "UP_COUNT_ASYNC";
export const DOWN_COUNT_ASYNC = "DOWN_COUNT_ASYNC";

export function upCount(val) {
  return {
    type: UP_COUNT,
    payload: val
  };
}

export function downCount(val) {
  return {
    type: DOWN_COUNT,
    payload: val
  };
}
