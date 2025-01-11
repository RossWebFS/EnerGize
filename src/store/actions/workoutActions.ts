import {
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUTS_REQUEST,
  FETCH_WORKOUTS_SUCCESS,
  FinishedExerciseT,
  UPDATE_EXERCISE_STATUS,
  WorkoutsActionTypes,
  WorkoutT,
} from "@/src/types/workouts";

export const fetchWorkoutsRequest = (): WorkoutsActionTypes => ({
  type: FETCH_WORKOUTS_REQUEST,
});

export const fetchWorkoutsSuccess = (
  workouts: WorkoutT[]
): WorkoutsActionTypes => ({
  type: FETCH_WORKOUTS_SUCCESS,
  payload: workouts,
});

export const fetchWorkoutsFailure = (error: string): WorkoutsActionTypes => ({
  type: FETCH_WORKOUTS_FAILURE,
  payload: error,
});

export const updateExerciseStatus = (
  payload: FinishedExerciseT
): WorkoutsActionTypes => ({
  type: UPDATE_EXERCISE_STATUS,
  payload,
});
