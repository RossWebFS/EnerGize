import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Animated, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import styles from "@/src/components/SplashScreen/SpashScreen.style";
import GradientText from "@/src/components/GradientText/GradientText";
import { useFonts } from "expo-font";

type SplashScreenCustomProps = {
  setIsReady: Dispatch<SetStateAction<boolean>>;
};

const SplashScreenCustom = ({ setIsReady }: SplashScreenCustomProps) => {
  const fadeAnim = new Animated.Value(0);

  const [isFontLoaded] = useFonts({
    Inter: require("@/assets/fonts/InterRegular.ttf"),
    Poppins: require("@/assets/fonts/PoppinsRegular.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      SplashScreen.hideAsync();

      if (isFontLoaded) {
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setIsReady(true);
        });
      }
    };

    prepare();
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <GradientText style={styles.text}>EnerGize</GradientText>
    </Animated.View>
  );
};

export default SplashScreenCustom;
