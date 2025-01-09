import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as React from "react";

import Navigation from "@/src/navigation";

Asset.loadAsync([...NavigationAssets]);

export function App() {
  return <Navigation />;
}
