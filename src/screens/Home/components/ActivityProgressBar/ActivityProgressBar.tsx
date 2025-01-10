import ProgressBar from "@/src/screens/Home/components/ProgressBar/ProgressBar";
import { useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";

type ActivityProgressBarProps = {
    progress: number,
    activity: string, 
};

const ActivityProgressBar = ({activity, progress}: ActivityProgressBarProps) => {
    const {colors} = useTheme()

  return (
    <View style={{ justifyContent: "space-between", height: 77 }}>
      <View
        style={{
          height: "100%",
          backgroundColor: `${colors.text}2`,
          borderRadius: 10,
          padding: 10,
          gap: 10,
        }}
      >
        <Text style={{ color: colors.text, fontSize: 18, fontWeight: 600 }}>
          {activity}
        </Text>
        <ProgressBar progress={progress} />
      </View>
    </View>
  );
};

export default ActivityProgressBar;
