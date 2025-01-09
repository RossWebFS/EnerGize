import { ScreenTypes } from "@/src/navigation.d";
import Login from "@/src/screens/Login";
import Register from "@/src/screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenTypes.Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenTypes.Login} component={Login} />
      <Stack.Screen name={ScreenTypes.Register} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
