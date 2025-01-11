export type ExerciseT = {
  title: string;
  description: string;
  reps: number;
  sets: number;
  img: string;
};

export type WorkoutT = {
  img: string;
  exercices: ExerciseT[];
  _id: string;
  type: string;
  duration: number;
  calories: number;
  date: string;
};

export type FinishedExerciseT = {
  workoutId: string;
  exerciseIndex: number
}

export type WorkoutsStateT = {
  workouts: WorkoutT[];
  loading: boolean;
  error: string | null;
  finished: FinishedExerciseT[];
  inProgress: number;
  totalCalories: number;
  totalMinutes: number;
};

export const FETCH_WORKOUTS_REQUEST = "FETCH_WORKOUTS_REQUEST";
export const FETCH_WORKOUTS_SUCCESS = "FETCH_WORKOUTS_SUCCESS";
export const FETCH_WORKOUTS_FAILURE = "FETCH_WORKOUTS_FAILURE";
export const UPDATE_EXERCISE_STATUS = "UPDATE_EXERCISE_STATUS";

interface FetchWorkoutsRequestAction {
  type: typeof FETCH_WORKOUTS_REQUEST;
}

interface FetchWorkoutsSuccessAction {
  type: typeof FETCH_WORKOUTS_SUCCESS;
  payload: WorkoutT[];
}

interface FetchWorkoutsFailureAction {
  type: typeof FETCH_WORKOUTS_FAILURE;
  payload: string;
}

interface UpdateExericeStatusAction {
  type: typeof UPDATE_EXERCISE_STATUS;
  payload: FinishedExerciseT;
}

export type WorkoutsActionTypes =
  | FetchWorkoutsRequestAction
  | FetchWorkoutsSuccessAction
  | FetchWorkoutsFailureAction
  | UpdateExericeStatusAction;
