import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoreStack from "@/src/navigation/stacks/CoreStack";
import { useState } from "react";
import AuthStack from "@/src/navigation/stacks/AuthStack";
import { ScreenTypes } from "@/src/navigation.d";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
