import { workoutsReducer } from "@/src/store/reducers/workoutReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  workouts: workoutsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer