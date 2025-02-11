import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import styles from "@/src/screens/Home/components/DateCard/DateCard.style";
import getWeekDay from "@/src/utils/getWeekDay";

const DateCard = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: `${colors.text}2` }]}>
      <Text style={styles.dateText}>{new Date().getDate()}</Text>
      <Text style={[styles.weekdayText, { color: colors.text }]}>
        {getWeekDay(new Date())}
      </Text>
    </View>
  );
};

export default DateCard;
