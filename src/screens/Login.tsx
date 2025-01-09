import { RootStackParamList, ScreenTypes } from "@/src/navigation.d";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, SafeAreaView, Text } from "react-native";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenTypes.Login
>;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate(ScreenTypes.Register)}
      />
    </SafeAreaView>
  );
};

export default Login;
