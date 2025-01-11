import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/src/screens/Home/Home";
import WorkoutsStack from "./WorkoutsStack";
import { ScreenTypes } from "@/src/navigation.d";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const CoreStack = () => {
  const { colors } = useTheme();

  useLayoutEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("transparent");
  });

  return (
    <Tab.Navigator
      initialRouteName={ScreenTypes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#63cd00",
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === ScreenTypes.Home) {
            icon = "home";
          } else if (route.name === ScreenTypes.Workouts) {
            icon = "dumbbell";
          }

          return <FontAwesome5 name={icon} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: 70,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          position: "absolute",
        },
        tabBarItemStyle: {
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen name={ScreenTypes.Home} component={Home} />
      <Tab.Screen name={ScreenTypes.Workouts} component={WorkoutsStack} />
    </Tab.Navigator>
  );
};

export default CoreStack;
