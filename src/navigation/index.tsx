import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@/src/navigation/stacks/AppStack";
import { useThemeContext } from "@/src/contexts/ThemeContext";
import { lightTheme, darkTheme } from "@design-system";

const Navigation = () => {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer theme={theme === "light" ? lightTheme : darkTheme}>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
