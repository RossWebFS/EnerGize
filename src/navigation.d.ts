export type RootStackParamList = {
  Home: undefined;
  Workouts: undefined;
  Verifying: undefined;
  WorkoutDetails: { workoutId: string };
};

export enum ScreenTypes {
  Home = "Home",
  Workouts = "Workouts",
  WorkoutDetails = "WorkoutDetails",
  Verifying = "Verifying",
  CoreStack = "CoreStack",
  AuthStack = "AuthStack"
}
