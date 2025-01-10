import styles from "@/src/screens/Home/components/ProgressBar/ProgressBar.style";
import { useTheme } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

const ProgressBar = ({ progress }: { progress: number }) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBarFill,
            {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
      <Text style={[styles.progressText, { color: colors.text }]}>
        {`${Math.round(progress * 100)}%`}
      </Text>
    </View>
  );
};

export default ProgressBar;
