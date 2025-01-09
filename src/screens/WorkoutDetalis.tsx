import { RootStackParamList, ScreenTypes } from "@/src/navigation.d";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, SafeAreaView, Text } from "react-native";

const WorkoutDetails = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, ScreenTypes.WorkoutDetails>>();
  const { workoutId } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>WorkoutDetails screen</Text>
      <Text>{workoutId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default WorkoutDetails;
