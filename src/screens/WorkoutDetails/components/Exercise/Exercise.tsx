import { Text, View } from "react-native";
import Checkbox from "@/src/components/CheckBox/CheckBox";
import { useTheme } from "@react-navigation/native";
import styles from "@/src/screens/WorkoutDetails/components/Exercise/Exercise.style";

type ExerciseT = {
  title: string;
  description: string;
  reps: number;
  sets: number;
  img: string;
};

type ExerciseProps = {
  exercise: ExerciseT;
  isChecked: boolean;
  onCheckboxChange: () => void;
};

const Exercise = ({ exercise, isChecked, onCheckboxChange }: ExerciseProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.exerciseContainer}>
      <Checkbox isChecked={isChecked} onPress={onCheckboxChange} />
      <View style={styles.exerciseDetails}>
        <Text style={[styles.exerciseTitle, {color: colors.text}]}>{exercise.title}</Text>
        <Text style={[styles.exerciseDescription, {color: colors.text}]}>{exercise.description}</Text>
        <Text style={[styles.exerciseRepsSets, {color: colors.text}]}>
          Reps: {exercise.reps} | Sets: {exercise.sets}
        </Text>
      </View>
    </View>
  );
};

export default Exercise;
