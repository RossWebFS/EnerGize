import { RootStackParamList, ScreenTypes } from "@/src/navigation.d";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, SafeAreaView, Text } from "react-native";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenTypes.Register
>;

const Register = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Text>Register screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate(ScreenTypes.Login)}
      />
    </SafeAreaView>
  );
};

export default Register;
