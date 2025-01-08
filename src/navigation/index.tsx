import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/src/screens/Home";

const RootStack = createNativeStackNavigator({
  screens: {
    Home,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
