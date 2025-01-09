import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";
import CoreStack from "@/src/navigation/stacks/CoreStack";
import { useState } from "react";
import AuthStack from "@/src/navigation/stacks/AuthStack";
import { ScreenTypes } from "@/src/navigation.d";
import appStyles from "@design-system";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  // Temporary
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", backgroundColor: "#000" }}
      >
        <ActivityIndicator size="large" color={appStyles.secondaryColor} />
      </View>
    );
  }
  //

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name={ScreenTypes.CoreStack} component={CoreStack} />
      ) : (
        <Stack.Screen name={ScreenTypes.AuthStack} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
