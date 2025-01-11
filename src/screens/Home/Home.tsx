import { FlatList, ScrollView, Text, View } from "react-native";
import { useMemo } from "react";
import StatsCard from "@/src/screens/Home/components/StatsCard/StatsCard";
import { useTheme } from "@react-navigation/native";
import DateCard from "@/src/screens/Home/components/DateCard/DateCard";
import ActivityProgressBar from "@/src/screens/Home/components/ActivityProgressBar/ActivityProgressBar";
import TrainingCard from "@/src/screens/Home/components/TrainingCard/TrainingCard";
import styles from "@/src/screens/Home/Home.style";
import AppLayout from "@/src/components/AppLayout/AppLayout";
import filterWorkoutsByDate from "@/src/utils/filterWorkoutsByDate";
import useAppSelector from "@/src/hooks/useAppSelector";

const Home = () => {
  const { colors } = useTheme();
  const { workouts, finished, inProgress, totalCalories, totalMinutes } =
    useAppSelector((state) => state.workouts);

  const filteredWorkouts = filterWorkoutsByDate(workouts);

  const exerciseCount = useMemo(
    () =>
      workouts.reduce((acc, workout) => {
        acc += workout.exercices.length;
        return acc;
      }, 0),
    [workouts]
  );

  return (
    <AppLayout>
      <View style={styles.activityTitle}>
        <Text style={[styles.activityTitleText, { color: colors.text }]}>
          Your Today Activity
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.statsScroll} horizontal>
        <StatsCard
          data={{ icon: "walking", number: totalCalories, union: "Calories" }}
          key={Math.random()}
        />
        <StatsCard
          data={{ icon: "clock", number: totalMinutes, union: "Minutes" }}
          key={Math.random()}
        />
      </ScrollView>

      <View style={styles.activityProgressContainer}>
        <DateCard />
        <View style={styles.progressBarContainer}>
          <ActivityProgressBar
            activity="In Progress"
            progress={finished.length / exerciseCount}
          />
          <ActivityProgressBar
            activity="Finished"
            progress={inProgress / workouts.length}
          />
        </View>
      </View>

      <FlatList
        data={filteredWorkouts}
        renderItem={({ item }) => <TrainingCard data={item} />}
        keyExtractor={() => String(Math.random())}
        contentContainerStyle={styles.flatList}
        snapToAlignment="center"
        horizontal
      />
    </AppLayout>
  );
};

export default Home;
