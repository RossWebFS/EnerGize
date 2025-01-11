import styles from "@/src/screens/Home/components/StatsCard/StatsCard.style";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

type TStats = {
  number: number;
  union: string;
  icon: string;
};

type StatsCardProps = {
  data: TStats;
};

const StatsCard = ({ data }: StatsCardProps) => {
  const { colors } = useTheme();

  const { icon, number, union } = data;

  return (
    <LinearGradient
      style={styles.cardContainer}
      colors={["#2b8700", "#48ff0039"]}
      locations={[0, 0.9]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.iconContainer}>
        <FontAwesome5 name={icon} size={36} color="#eee" />
      </View>
      <Text style={[styles.numberText, { color: colors.text }]}>{number}</Text>
      <Text style={styles.unionText}>{union}</Text>
    </LinearGradient>
  );
};

export default StatsCard;
