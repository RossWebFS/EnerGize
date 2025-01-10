import GradientText from "@/src/components/GradientText/GradientText";
import styles from "@/src/components/Header/Header.style";
import ThemeToggler from "@/src/components/ThemeToggler/ThemeToggler";
import { View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <GradientText style={styles.gradientText}>EnerGize</GradientText>
      <ThemeToggler />
    </View>
  );
};

export default Header;
