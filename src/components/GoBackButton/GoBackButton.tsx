import styles from "@/src/components/GoBackButton/GoBackButton.style";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.goBackButton}
    >
      <Text style={styles.goBackButtonText}>Go Back</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
