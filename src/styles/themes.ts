import { DefaultTheme } from "@react-navigation/native";

export const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#eee",
    text: "#000",
  },
};

export const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: "#000",
    text: "#eee",
  },
};
