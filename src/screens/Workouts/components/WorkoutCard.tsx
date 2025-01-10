import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList, ScreenTypes } from "@/src/navigation.d";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useTheme } from "@react-navigation/native";
import styles from "@/src/screens/Workouts/components/WorkoutCard.style";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenTypes.WorkoutDetails
>;

type ExerciseT = {
  title: string;
  description: string;
  reps: number;
  sets: number;
  img: string;
};

type WorkoutT = {
  img: string;
  exercices: ExerciseT[];
  id: string;
  type: string;
  duration: number;
  calories: number;
  date: string;
};

type WorkoutsProps = {
  workout: WorkoutT;
};

const WorkoutCard = ({ workout }: WorkoutsProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.workoutContainer,
        {
          backgroundColor: colors.background,
          ...(Platform.OS === "web"
            ? {
                boxShadow: `0px 2px 8px ${colors.text}2`,
              }
            : {
                ...styles.shadowSmartphone,
                shadowColor: colors.text,
              }),
        },
      ]}
      onPress={() =>
        navigation.navigate(ScreenTypes.WorkoutDetails, {
          workoutId: workout.id,
        })
      }
    >
      <Image source={{ uri: workout.img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: `${colors.text}c` }]}>
          {workout.type}
        </Text>
        <Text style={styles.subTitle}>
          {workout.duration} min | {workout.calories} kcal
        </Text>
        <Text style={[styles.date, { color: colors.text }]}>
          {workout.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
