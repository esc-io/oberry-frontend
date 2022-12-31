import { MD3LightTheme, useTheme } from "react-native-paper";

export const theme = {
  ...MD3LightTheme,
  custom: "property",

  colors: {
    ...MD3LightTheme.colors,
    primary: "#F5C750",
    gray900: "#22242c",
    white: "#ffff",
    black: "#000",
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
