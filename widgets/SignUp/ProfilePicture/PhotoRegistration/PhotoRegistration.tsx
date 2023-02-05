import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

import { useNavigation, StackActions } from "@react-navigation/native";

import { AppLayout } from "layouts";

import { theme } from "styles/theme";
import { SIGN_UP_SELF_INTRODUCTION } from "constants/signUp";

import ProfileImage from "./ProfileImage.widget";

function PhotoRegistration() {
  const navigation = useNavigation();
  const pushAction = StackActions.push("sign-up", {
    step: SIGN_UP_SELF_INTRODUCTION,
  });

  return (
    <AppLayout title="프로필 사진">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            {`상대에게 보여줄 사진을 등록해
주세요.`}
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            {`얼굴이 잘 나온 사진을 등록해 주세요.
마스크, 선글라스 등을 착용한 사진은 피해주세요.`}
          </Text>
          <View>
            <View style={styles.profileImageSection}>
              <Text
                variant="bodyMedium"
                style={{
                  color: theme.colors.primary,
                }}
              >
                필수 3장
              </Text>
              <View style={styles.profileImageGroup}>
                <ProfileImage uri="https://reactnative.dev/img/tiny_logo.png" />
                <ProfileImage uri="https://reactnative.dev/img/tiny_logo.png" />
                <ProfileImage uri="https://reactnative.dev/img/tiny_logo.png" />
              </View>
            </View>
            <View style={styles.profileImageSection}>
              <Text
                variant="bodyMedium"
                style={{
                  color: theme.colors.white,
                }}
              >
                추가
              </Text>
              <View style={styles.profileImageGroup}>
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
              </View>
            </View>
          </View>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          onPress={() => {
            navigation.dispatch(pushAction);
          }}
        >
          다음
        </Button>
      </View>
    </AppLayout>
  );
}

export default PhotoRegistration;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.gray500,
  },
  profileImageSection: {
    marginTop: 32,
  },
  profileImageGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
});
