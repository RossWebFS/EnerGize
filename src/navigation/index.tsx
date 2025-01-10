import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@/src/navigation/stacks/AppStack";
import { useThemeContext } from "@/src/contexts/ThemeContext";
import { lightTheme, darkTheme } from "@design-system";
import SplashScreenCustom from "@/src/components/SplashScreen/SpashScreen";
import { useState } from "react";

const Navigation = () => {
  const { theme } = useThemeContext();
  const [isReady, setIsReady] = useState(false);

  return (
    <NavigationContainer theme={theme === "light" ? lightTheme : darkTheme}>
      {isReady ? <AppStack /> : <SplashScreenCustom setIsReady={setIsReady} />}
    </NavigationContainer>
  );
};

export default Navigation;
