import workoutsSaga from "@/src/store/sagas/workoutsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([workoutsSaga()]);
}