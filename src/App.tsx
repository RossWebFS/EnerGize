import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

import Navigation from "@/src/navigation";

Asset.loadAsync([...NavigationAssets]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <Navigation
      linking={{
        enabled: "auto",
        prefixes: ["energize://"],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
}
