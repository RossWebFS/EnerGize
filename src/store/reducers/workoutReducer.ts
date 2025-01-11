import {
  FETCH_WORKOUTS_FAILURE,
  FETCH_WORKOUTS_REQUEST,
  FETCH_WORKOUTS_SUCCESS,
  UPDATE_EXERCISE_STATUS,
  WorkoutsActionTypes,
  WorkoutsStateT,
} from "@/src/types/workouts";

const initialState: WorkoutsStateT = {
  workouts: [],
  loading: false,
  error: null,
  finished: [],
  inProgress: 0,
  totalCalories: 0,
  totalMinutes: 0,
};

export const workoutsReducer = (
  state = initialState,
  action: WorkoutsActionTypes
): WorkoutsStateT => {
  switch (action.type) {
    case FETCH_WORKOUTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_WORKOUTS_SUCCESS:
      return { ...state, loading: false, workouts: action.payload };
    case FETCH_WORKOUTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_EXERCISE_STATUS: {
      const { workoutId, exerciseIndex } = action.payload;

      const workout = state.workouts.find((w) => w._id === workoutId);
      if (!workout) return state;

      const isAlreadyFinished = state.finished.some(
        (item) =>
          item.workoutId === workoutId && item.exerciseIndex === exerciseIndex
      );

      const updatedFinished = isAlreadyFinished
        ? state.finished.filter(
            (item) =>
              item.workoutId !== workoutId ||
              item.exerciseIndex !== exerciseIndex
          )
        : [...state.finished, { workoutId, exerciseIndex }];

      const totals = updatedFinished.reduce(
        (acc, item) => {
          const currentWorkout = state.workouts.find(
            (w) => w._id === item.workoutId
          );

          if (currentWorkout) {
            const caloriesPerExercise =
              currentWorkout.calories / currentWorkout.exercices.length;
            const minutesPerExercise =
              currentWorkout.duration / currentWorkout.exercices.length;

            acc.totalCalories += caloriesPerExercise;
            acc.totalMinutes += minutesPerExercise;
          }

          return acc;
        },
        { totalCalories: 0, totalMinutes: 0 }
      );

      const completeWorkoutsCount = state.workouts.reduce((count, workout) => {
        const completedExercisesCount = updatedFinished.filter(
          (item) => item.workoutId === workout._id
        ).length;

        if (completedExercisesCount === workout.exercices.length) {
          count += 1;
        }

        return count;
      }, 0);

      return {
        ...state,
        finished: updatedFinished,
        inProgress: completeWorkoutsCount,
        totalCalories: Math.round(totals.totalCalories),
        totalMinutes: Math.round(totals.totalMinutes),
      };
    }
    default:
      return state;
  }
};
