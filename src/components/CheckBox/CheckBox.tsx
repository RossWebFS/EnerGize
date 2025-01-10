import styles from "@/src/components/CheckBox/CheckBox.style";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

type CheckboxProps = {
  isChecked: boolean;
  onPress: () => void;
};

const Checkbox = ({ isChecked, onPress }: CheckboxProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.checkbox,
        isChecked && { backgroundColor: colors.text },
        { borderColor: colors.text },
      ]}
    >
      {isChecked && (
        <FontAwesome5 name="check" size={16} color={colors.background} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
