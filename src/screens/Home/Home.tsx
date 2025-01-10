import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "@/src/components/GradientText";
import StatsCard from "@/src/screens/Home/components/StatsCard/StatsCard";
import { useTheme } from "@react-navigation/native";
import ThemeToggler from "@/src/screens/Home/components/ThemeToggler/ThemeToggler";
import DateCard from "@/src/screens/Home/components/DateCard/DateCard";
import ActivityProgressBar from "@/src/screens/Home/components/ActivityProgressBar/ActivityProgressBar";
import TrainingCard from "@/src/screens/Home/components/TrainigCard/TrainingCard";
import styles from "@/src/screens/Home/Home.style";
// import appStyles from "@design-system";

const workouts = [
  {
    img: "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/1gRhpzIhNzr8hFuSF0vPBR/dd8ad0f0a0a9bdc26680e5b7c934efe6/birddog_jesssims.png",
    exercices: [
      {
        title: "Food",
        description: "Admit court available herself.",
        reps: 19,
        sets: 3,
        img: "https://placekitten.com/800/385",
      },
    ],
    id: "64d106be-94e3-4da0-8100-c106c333d20c",
    type: "balance",
    duration: 66,
    calories: 779,
    date: "2025-01-02T00:42:54",
  },
  {
    img: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    exercices: [
      {
        title: "Table",
        description: "Practice character number edge prove.",
        reps: 10,
        sets: 5,
        img: "https://www.lorempixel.com/216/42",
      },
      {
        title: "Serve",
        description: "Civil lose current.",
        reps: 16,
        sets: 5,
        img: "https://placekitten.com/69/341",
      },
    ],
    id: "276b9b24-4da2-4492-bfb4-7c876b0bd16e",
    type: "cardio",
    duration: 34,
    calories: 679,
    date: "2025-01-06T14:54:36",
  },
  {
    img: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
    exercices: [
      {
        title: "Table",
        description: "Practice character number edge prove.",
        reps: 10,
        sets: 5,
        img: "https://www.lorempixel.com/216/42",
      },
      {
        title: "Serve",
        description: "Civil lose current.",
        reps: 16,
        sets: 5,
        img: "https://placekitten.com/69/341",
      },
    ],
    id: "276b9b24-4da2-4492-bfb4-7c876b0bd16e",
    type: "cardio",
    duration: 34,
    calories: 679,
    date: "2025-01-06T14:54:36",
  },
];

const stats = [
  {
    number: "100 kal",
    union: "Calories",
    icon: "walking",
  },
  {
    number: "25",
    union: "minutes",
    icon: "clock",
  },
];

const Home = () => {
  const [progress, setProgress] = useState(0.4);

  const [isFontLoaded] = useFonts({
    Inter: require("@/assets/fonts/InterRegular.ttf"),
  });

  const { colors } = useTheme();

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!isFontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient
        style={[styles.linearGradient, { backgroundColor: colors.background }]}
        colors={[colors.background, "#00742e2c"]}
        locations={[0.5, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={styles.header}>
          <GradientText style={styles.gradientText}>EnerGize</GradientText>
          <ThemeToggler />
        </View>

        <View style={styles.activityTitle}>
          <Text style={[styles.activityTitleText, { color: colors.text }]}>
            Your Today Activity
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.statsScroll} horizontal>
          {stats.map((item) => (
            <StatsCard data={item} key={Math.random()} />
          ))}
        </ScrollView>

        <View style={styles.activityProgressContainer}>
          <DateCard />
          <View style={styles.progressBarContainer}>
            <ActivityProgressBar activity="Finished" progress={progress} />
            <ActivityProgressBar activity="Finished" progress={progress} />
          </View>
        </View>

        <FlatList
          data={workouts}
          renderItem={({ item }) => <TrainingCard data={item} />}
          keyExtractor={() => String(Math.random())}
          contentContainerStyle={styles.flatList}
          snapToAlignment="center"
          horizontal
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;