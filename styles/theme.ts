import { MD3LightTheme, useTheme, configureFonts } from "react-native-paper";

export const theme = {
  ...MD3LightTheme,
  custom: "property",
  colors: {
    ...MD3LightTheme.colors,
    primary: "#F5C750",
    gray500: "#a4aabc",
    gray600: "#6b6f7a",
    gray800: "#22242c",
    gray900: "#16181d",
    pink: "#fc7aa7",
    white: "#ffff",
    black: "#000",
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
