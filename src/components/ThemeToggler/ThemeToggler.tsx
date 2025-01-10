import { TouchableOpacity } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useThemeContext } from "@/src/contexts/ThemeContext";

const ThemeToggler = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      {theme === "light" ? (
        <FontAwesome5 name="sun" size={24} color="#000" />
      ) : (
        <FontAwesome5 name="moon" size={24} color="#fff" />
      )}
    </TouchableOpacity>
  );
};

export default ThemeToggler;
