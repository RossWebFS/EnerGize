import AppLayout from "@/src/components/AppLayout/AppLayout";
import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from "@react-navigation/native";
import { Image, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "@/src/screens/WorkoutDetails/WorkoutDetails.style";
import Exercise from "@/src/screens/WorkoutDetails/components/Exercise/Exercise";
import WorkoutInfo from "@/src/screens/WorkoutDetails/components/WorkoutInfo/WorkoutInfo";
import GoBackButton from "@/src/components/GoBackButton/GoBackButton";
import { ExerciseT } from "@/src/types/workouts";
import useAppSelector from "@/src/hooks/useAppSelector";
import { RootStackParamList, ScreenTypes } from "@/src/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useAppDispatch from "@/src/hooks/useAppDispatch";
import { updateExerciseStatus } from "@/src/store/actions/workoutActions";

type WorkoutDetailsRouteProp = RouteProp<
  RootStackParamList,
  ScreenTypes.WorkoutDetails
>;
type WorkoutDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenTypes.WorkoutDetails
>;

const WorkoutDetails = () => {
  const { colors } = useTheme();
  const { params } = useRoute<WorkoutDetailsRouteProp>();
  const navigation = useNavigation<WorkoutDetailsNavigationProp>();
  const { workouts, finished } = useAppSelector((state) => state.workouts);
  const dispatch = useAppDispatch();

  const workout = workouts.find((workout) => workout._id === params.workoutId);

  if (!workout) {
    navigation.navigate(ScreenTypes.Workouts);
    return null;
  }

  const handleCheckboxChange = (exerciseIndex: number) => {
    dispatch(
      updateExerciseStatus({
        workoutId: workout._id,
        exerciseIndex,
      })
    );
  };

  const isExerciseFinished = (exerciseIndex: number) =>
    finished.some(
      (item) =>
        item.workoutId === workout._id && item.exerciseIndex === exerciseIndex
    );

  return (
    <AppLayout>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
          backgroundColor: colors.background,
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: workout.img }} style={styles.image} />
          <LinearGradient colors={["#000b", "#0002"]} style={styles.gradient} />
        </View>

        <View style={styles.container}>
          <WorkoutInfo
            type={workout.type}
            date={workout.date}
            duration={workout.duration}
            calories={workout.calories}
          />

          {workout.exercices.map((exercise: ExerciseT, index: number) => (
            <Exercise
              key={exercise.title}
              exercise={exercise}
              isChecked={isExerciseFinished(index)}
              onCheckboxChange={() => handleCheckboxChange(index)}
            />
          ))}

          <GoBackButton />
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default WorkoutDetails;
