import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Avatar } from "react-native-paper";

import { AppLayout } from "layouts";
import { LogoWithText } from "components";
import { theme } from "styles/theme";

function ApplicationCompleted() {
  return (
    <AppLayout>
      <View style={styles.container}>
        <LogoWithText width={87} height={112} />
        <Text variant="headlineSmall" style={styles.title}>
          가입신청이 완료되었습니다.
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          전체 가입신청이 완료 되었습니다.
          {"\n"}
          심사가 완료되면 문자메세지로
          {"\n"}
          심사결과를 알려드립니다.
          {"\n"}
          심사가완료될 때까지 기다려 주세요.
          {"\n"}
          감사합니다.
        </Text>
      </View>
    </AppLayout>
  );
}

export default ApplicationCompleted;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.white,
    marginTop: 64,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.gray500,
    marginRight: 8,
    textAlign: "center",
  },
});
