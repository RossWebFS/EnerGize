import { RootStackParamList, ScreenTypes } from "@/src/navigation.d";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, SafeAreaView, Text } from "react-native";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenTypes.WorkoutDetails
>;

const Workouts = () => {
  const workouts = [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];

  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView>
      <Text>Workouts screeen</Text>
      {workouts.map(({ id }) => {
        return (
          <Button
            key={Math.random()}
            title={id}
            onPress={() =>
              navigation.navigate(ScreenTypes.WorkoutDetails, { workoutId: id })
            }
          />
        );
      })}
    </SafeAreaView>
  );
};

export default Workouts;
