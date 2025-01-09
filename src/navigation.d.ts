export type RootStackParamList = {
  Home: undefined;
  Workouts: undefined;
  Profile: { userId: string };
  Login: undefined;
  Register: undefined;
  WorkoutDetails: { workoutId: string };
};

export enum ScreenTypes {
  Home = "Home",
  Workouts = "Workouts",
  Profile = "Profile",
  WorkoutDetails = "WorkoutDetails",
  Login = "Login",
  Register = "Register",
  CoreStack = "CoreStack",
  AuthStack = "AuthStack"
}
