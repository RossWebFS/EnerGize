import { Dispatch, SetStateAction, useEffect } from "react";
import { Animated } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import styles from "@/src/components/SplashScreen/SpashScreen.style";
import GradientText from "@/src/components/GradientText/GradientText";
import { useFonts } from "expo-font";
import { useTheme } from "@react-navigation/native";
import useAppDispatch from "@/src/hooks/useAppDispatch";
import { fetchWorkoutsRequest } from "@/src/store/actions/workoutActions";

type SplashScreenCustomProps = {
  setIsReady: Dispatch<SetStateAction<boolean>>;
};

const SplashScreenCustom = ({ setIsReady }: SplashScreenCustomProps) => {
  const fadeAnim = new Animated.Value(0);

  const [isFontLoaded] = useFonts({
    Inter: require("@/assets/fonts/InterRegular.ttf"),
    Poppins: require("@/assets/fonts/PoppinsRegular.ttf"),
  });
  const dispatch = useAppDispatch();

  const { colors } = useTheme();

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      SplashScreen.hideAsync();
      
      dispatch(fetchWorkoutsRequest());
      
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
    <Animated.View
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <GradientText style={{ ...styles.text, opacity: fadeAnim }}>
        EnerGize
      </GradientText>
    </Animated.View>
  );
};

export default SplashScreenCustom;
