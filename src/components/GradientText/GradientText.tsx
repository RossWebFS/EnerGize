import MaskedView from "@react-native-masked-view/masked-view";
import { Animated, Platform, TextStyle, ViewStyle } from "react-native";
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
  colors = ["#7db200", "#00a21b"],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  gradientStyle,
  ...props
}: GradientTextProps) => {
  if (Platform.OS === "web") {
    const webGradientStyle = {
      ...style,
      background: `linear-gradient(to right, ${colors.join(", ")})`,
      WebkitBackgroundClip: "text",
      color: "transparent",
    } as TextStyle;

    return <Animated.Text {...props} style={webGradientStyle} />;
  }

  return (
    <MaskedView maskElement={<Animated.Text {...props} style={style} />}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={gradientStyle}
      >
        <Animated.Text {...props} style={{ ...style, opacity: 0 }} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
