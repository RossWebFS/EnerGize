import Workouts from "@/src/screens/Workouts/Workouts";
import WorkoutDetails from "@/src/screens/WorkoutDetails/WorkoutDetalis";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenTypes } from "@/src/navigation.d";

const Stack = createNativeStackNavigator();

const WorkoutsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenTypes.Workouts}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenTypes.Workouts} component={Workouts} />
      <Stack.Screen
        name={ScreenTypes.WorkoutDetails}
        component={WorkoutDetails}
      />
    </Stack.Navigator>
  );
};

export default WorkoutsStack;
