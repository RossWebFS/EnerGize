import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigation from "@/src/navigation/index";
import { ThemeProvider } from "@/src/contexts/ThemeContext";

EStyleSheet.build();

Asset.loadAsync([...NavigationAssets]);

export function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
