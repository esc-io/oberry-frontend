import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Avatar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { Logo } from "components";

import { AppLayout } from "layouts";

import { theme } from "styles/theme";
import { SIGN_UP_Badge_Select } from "constants/signUp";

function BadgeIntroduction() {
  const navigation = useNavigation();

  return (
    <AppLayout title="뱃지 인증">
      <View style={styles.container}>
        <View>
          <View style={styles.Logo}>
            <Logo />
            <Avatar.Icon
              size={32}
              icon="check"
              color={theme.colors.white}
              style={styles.icon}
            />
          </View>
          <View>
            <Text variant="headlineSmall" style={styles.title}>
              {`인증 자료를 제출하고 뱃지를
받으세요.`}
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
              오'베리는 개인정보보호법에 의거하여, 회원님의 소중한 개인정보를
              인증 목적 외의 용도로 활용하지 않으며, 무단으로 외부에 배포하지
              않습니다.
            </Text>
          </View>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          onPress={() => navigation.navigate(SIGN_UP_Badge_Select)}
        >
          시작
        </Button>
      </View>
    </AppLayout>
  );
}

export default BadgeIntroduction;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Logo: {
    position: "relative",
    width: 140,
    height: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.gray600,
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 66,
    marginBottom: 56,
  },
  icon: {
    position: "absolute",
    right: 4,
    bottom: 4,
    backgroundColor: theme.colors.black,
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.gray500,
    marginBottom: 24,
  },
});
