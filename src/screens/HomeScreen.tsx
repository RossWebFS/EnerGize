import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import Home from "@/assets/svgs/home.svg";

function HomeScreen() {
  const [isFontLoaded] = useFonts({
    Inter: require("../../assets/fonts/InterRegular.ttf"),
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "Inter" }}>Home Screen</Text>
      <View>
        <Home width={48} height={48} />
      </View>
    </View>
  );
}

export default HomeScreen;
