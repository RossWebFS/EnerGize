import styles from "@/src/components/AppLayout/AppLayout.style";
import Header from "@/src/components/Header/Header";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { SafeAreaView, View } from "react-native";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradient
        style={[styles.linearGradient, { backgroundColor: colors.background }]}
        colors={[colors.background, "#00742e2c"]}
        locations={[0.5, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Header />
        <View style={styles.content}>{children}</View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AppLayout;
