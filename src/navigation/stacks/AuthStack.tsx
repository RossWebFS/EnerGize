import { ScreenTypes } from "@/src/navigation.d";
import Verifying from "@/src/screens/Verifying/Verifying";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenTypes.Verifying}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenTypes.Verifying} component={Verifying} />
    </Stack.Navigator>
  );
};

export default AuthStack;
