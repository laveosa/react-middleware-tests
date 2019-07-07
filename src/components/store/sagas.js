import * as actions from "./actions.js";
import { takeEvery, takeLatest, put, all } from "redux-saga/effects";

function* upCount(action) {
  console.log(action);

  yield put(actions.upCount(action.payload));
}

function* downCount(action) {
  console.log(action);

  yield put(actions.downCount(action.payload));
}

export function* sagas() {
  yield all([
    yield takeEvery(actions.UP_COUNT_ASYNC, upCount),
    yield takeLatest(actions.DOWN_COUNT_ASYNC, downCount)
  ]);
}
