import styles from "@/src/screens/Home/components/TrainigCard/TrainigCard.style";
import { ImageBackground, Text, View } from "react-native";

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

type TrainingCardProps = {
  data: WorkoutT;
};

const TrainingCard = ({ data }: TrainingCardProps) => {
  return (
    <ImageBackground
      source={{ uri: data.img }}
      style={styles.imageBackground}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.typeText}>{data.type.toUpperCase()}</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>⏱ {data.duration} min</Text>
            <Text style={styles.statsText}>🔥 {data.calories} cal</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TrainingCard;
