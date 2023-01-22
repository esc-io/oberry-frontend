import React from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Appbar } from "react-native-paper";
import { theme, useAppTheme } from "styles/theme";

interface AppLayoutProps {
  title?: string;
  children: React.ReactNode;
}

function AppLayout({ title, children }: AppLayoutProps) {
  const theme = useAppTheme();
  const navigation = useNavigation();

  return (
    <>
      {title && (
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction
            color={theme.colors.white}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content color={theme.colors.white} title={title} />
        </Appbar.Header>
      )}
      <View style={styles.contents}>{children}</View>
    </>
  );
}

export default AppLayout;

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    backgroundColor: theme.colors.gray800,
    paddingTop: 24,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 10,
  },
  header: {
    backgroundColor: theme.colors.gray800,
  },
});
