import AppLayout from "@/src/components/AppLayout/AppLayout";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "@/src/screens/WorkoutDetails/WorkoutDetails.style";
import Exercise from "@/src/screens/WorkoutDetails/components/Exercise/Exercise";
import WorkoutInfo from "@/src/screens/WorkoutDetails/components/WorkoutInfo/WorkoutInfo";
import GoBackButton from "@/src/components/GoBackButton/GoBackButton";

const workout = {
  id: "1",
  img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
  exercices: [
    {
      title: "Push-ups",
      description: "Standard push-up exercise",
      reps: 15,
      sets: 3,
      img: "",
    },
    {
      title: "Squats",
      description: "Squat exercise to strengthen legs",
      reps: 20,
      sets: 3,
      img: "",
    },
  ],
  type: "Cardio",
  duration: 30,
  calories: 250,
  date: "2025.01.10",
};

type ExerciseT = {
  title: string;
  description: string;
  reps: number;
  sets: number;
  img: string;
};

const WorkoutDetails = () => {
  const [completedExercises, setCompletedExercises] = useState<boolean[]>(
    new Array(workout.exercices.length).fill(false)
  );

  const { colors } = useTheme();

  const handleCheckboxChange = (index: number) => {
    const updatedExercises = [...completedExercises];
    updatedExercises[index] = !updatedExercises[index];
    setCompletedExercises(updatedExercises);
  };

  return (
    <AppLayout>
      <View style={styles.imageContainer}>
        <Image source={{ uri: workout.img }} style={styles.image} />
        <LinearGradient colors={["#000b", "#0002"]} style={styles.gradient} />
      </View>
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
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
            isChecked={completedExercises[index]}
            onCheckboxChange={() => handleCheckboxChange(index)}
          />
        ))}

        <GoBackButton />
      </ScrollView>
    </AppLayout>
  );
};

export default WorkoutDetails;
