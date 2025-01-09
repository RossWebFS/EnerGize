import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $appPrimaryColor: "#000",
  $appSecondaryColor: "#00580c",
  $appGradientColor: "#00742e2c",
  $appFontFamily: "Inter",
  $appFontSize: 16,
});

const appStyles = {
  primaryColor: EStyleSheet.value("$appPrimaryColor"),
  secondaryColor: EStyleSheet.value("$appSecondaryColor"),
  gradientColor: EStyleSheet.value("$appGradientColor"),
  fontFamily: EStyleSheet.value("$appFontFamily"),
  fontSize: EStyleSheet.value("$appFontSize"),
} as const;

export default appStyles;
