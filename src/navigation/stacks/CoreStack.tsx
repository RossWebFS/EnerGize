import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/src/screens/Home";
import WorkoutsStack from "./WorkoutsStack";
import Profile from "@/src/screens/Profile";
import { ScreenTypes } from "@/src/navigation.d";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const CoreStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenTypes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00580c",
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === ScreenTypes.Home) {
            icon = "home";
          } else if (route.name === ScreenTypes.Workouts) {
            icon = "dumbbell";
          } else if (route.name === ScreenTypes.Profile) {
            icon = "user";
          }
          
          return <FontAwesome5 name={icon} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name={ScreenTypes.Home} component={Home} />
      <Tab.Screen name={ScreenTypes.Workouts} component={WorkoutsStack} />
      <Tab.Screen name={ScreenTypes.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default CoreStack;
