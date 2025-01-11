import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import styles from "@/src/screens/WorkoutDetails/components/WorkoutInfo/WorkoutInfo.style";
import formatDate from "@/src/utils/formatDate";

type WorkoutInfoProps = {
  type: string;
  date: string;
  duration: number;
  calories: number;
};

const WorkoutInfo = ({ type, date, duration, calories }: WorkoutInfoProps) => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles.title, { color: colors.text }]}>{type} Workout</Text>
      <Text style={[styles.date, { color: colors.text }]}>{formatDate(date)}</Text>
      <Text style={[styles.duration, { color: colors.text }]}>
        Duration: {duration} min
      </Text>
      <Text style={[styles.calories, { color: colors.text }]}>
        Calories Burned: {calories}
      </Text>
      <Text style={[styles.exercisesTitle, { color: colors.text }]}>
        Exercises:
      </Text>
    </View>
  );
};

export default WorkoutInfo;
