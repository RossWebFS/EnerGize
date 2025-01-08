import MaskedView from "@react-native-masked-view/masked-view";
import { Text, TextStyle, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextProps } from "react-native-svg";

type GradientTextProps = {
  colors?: readonly [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: TextStyle;
  gradientStyle?: ViewStyle;
} & TextProps;

const GradientText = ({
  colors = ["#045400", "#003d02"],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  gradientStyle,
  ...props
}: GradientTextProps) => {
  return (
    <MaskedView maskElement={<Text {...props} style={style} />}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={gradientStyle}
      >
        <Text {...props} style={{ ...style, opacity: 0 }} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
