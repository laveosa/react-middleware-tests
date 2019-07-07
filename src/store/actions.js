export const UP_COUNT = "UP_COUNT";
export const DOWN_COUNT = "DOWN_COUNT";

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
