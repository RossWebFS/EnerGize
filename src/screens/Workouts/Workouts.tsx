import AppLayout from "@/src/components/AppLayout/AppLayout";
import WorkoutCard from "@/src/screens/Workouts/components/WorkoutCard";
import styles from "@/src/screens/Workouts/Workouts.style";
import { useTheme } from "@react-navigation/native";
import { FlatList, Text } from "react-native";

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

const workouts: WorkoutT[] = [
  {
    id: "1",
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
    exercices: [],
    type: "Cardio",
    duration: 30,
    calories: 250,
    date: "2025-01-10",
  },
  {
    id: "2",
    img: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    exercices: [],
    type: "Strength Training",
    duration: 45,
    calories: 400,
    date: "2025-01-09",
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
    exercices: [],
    type: "Cardio",
    duration: 30,
    calories: 250,
    date: "2025-01-10",
  },
  {
    id: "4",
    img: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    exercices: [],
    type: "Strength Training",
    duration: 45,
    calories: 400,
    date: "2025-01-09",
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
    exercices: [],
    type: "Cardio",
    duration: 30,
    calories: 250,
    date: "2025-01-10",
  },
  {
    id: "6",
    img: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    exercices: [],
    type: "Strength Training",
    duration: 45,
    calories: 400,
    date: "2025-01-09",
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
    exercices: [],
    type: "Cardio",
    duration: 30,
    calories: 250,
    date: "2025-01-10",
  },
  {
    id: "8",
    img: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    exercices: [],
    type: "Strength Training",
    duration: 45,
    calories: 400,
    date: "2025-01-09",
  },
];

const Workouts = () => {
  const { colors } = useTheme();

  return (
    <AppLayout>
      <Text style={[styles.title, { color: colors.text }]}>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={({ item }: { item: WorkoutT }) => (
          <WorkoutCard workout={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </AppLayout>
  );
};

export default Workouts;
