import { NavigationContainer } from "@react-navigation/native";
import AppStack from "@/src/navigation/stacks/AppStack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
