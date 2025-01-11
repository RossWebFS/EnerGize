import AppLayout from "@/src/components/AppLayout/AppLayout";
import useAppSelector from "@/src/hooks/useAppSelector";
import WorkoutCard from "@/src/screens/Workouts/components/WorkoutCard";
import styles from "@/src/screens/Workouts/Workouts.style";
import { WorkoutT } from "@/src/types/workouts";
import { useTheme } from "@react-navigation/native";
import { ActivityIndicator, FlatList, Text } from "react-native";

const Workouts = () => {
  const { colors } = useTheme();
  const { workouts, loading, error } = useAppSelector(
    (state) => state.workouts
  );

  return (
    <AppLayout>
      <Text style={[styles.title, { color: colors.text }]}>Workouts</Text>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text style={{ color: colors.text }}>Error</Text>
      ) : (
        <FlatList
          data={workouts}
          renderItem={({ item }: { item: WorkoutT }) => (
            <WorkoutCard workout={item} />
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </AppLayout>
  );
};

export default Workouts;
