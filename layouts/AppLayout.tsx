import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Icon } from "react-native-magnus";

import { getStatusBarHeight } from "react-native-status-bar-height";
import { StatusBar, Platform } from "react-native";

interface AppLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const STATUS_BAR_Height =
  (Platform.OS === "ios"
    ? getStatusBarHeight(true)
    : StatusBar.currentHeight) ?? 0;

function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.title}>
          <Icon
            style={styles.icon}
            name="arrow-back"
            fontFamily="MaterialIcons"
            fontSize={24}
            color="white"
          />
          <Text color="white" fontSize="3xl">
            {title}
          </Text>
        </View>
      )}
      <View>{children}</View>
    </View>
  );
}

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22242c",
  },
  title: {
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 64 + STATUS_BAR_Height,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
