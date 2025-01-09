import { SafeAreaView, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import HomeIcon from "@/assets/svgs/home.svg";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "@/src/components/GradientText";

const Home = () => {
  const [isFontLoaded] = useFonts({
    Inter: require("@/assets/fonts/InterRegular.ttf"),
  });

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <LinearGradient
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
        }}
        colors={["#000", "#00742e2c"]}
        locations={[0.4, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <GradientText>Hello</GradientText>
        <Text style={{ fontFamily: "Inter" }}>Home Screen</Text>
        <HomeIcon width={48} height={48} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
