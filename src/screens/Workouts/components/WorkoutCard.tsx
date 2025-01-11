import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList, ScreenTypes } from "@/src/navigation.d";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useTheme } from "@react-navigation/native";
import styles from "@/src/screens/Workouts/components/WorkoutCard.style";
import { WorkoutT } from "@/src/types/workouts";
import formatDate from "@/src/utils/formatDate";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenTypes.WorkoutDetails
>;

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
          workoutId: workout._id,
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
          {formatDate(workout.date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
