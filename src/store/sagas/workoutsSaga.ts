import config from "@/src/config";
import {
  fetchWorkoutsFailure,
  fetchWorkoutsSuccess,
} from "@/src/store/actions/workoutActions";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleFetchWorkouts(): Generator<any, void> {
  try {
    const response = yield call(() => fetch(config.apiUrl));

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const json = yield call(() => new Promise((res) => res(response.json())));
    yield put(fetchWorkoutsSuccess(json));
  } catch (error) {
    if (error instanceof Error) yield put(fetchWorkoutsFailure(error.message));
  }
}

export default function* workoutsSaga() {
  yield takeLatest("FETCH_WORKOUTS_REQUEST", handleFetchWorkouts);
}
