import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, HelperText, Button } from "react-native-paper";

import { useNavigation, StackActions } from "@react-navigation/native";

import { AppLayout } from "layouts";

import { theme, useAppTheme } from "styles/theme";
import { SIGN_UP_INFORMATION_FORM } from "constants/signUp";

function AccountCreationForm() {
  const theme = useAppTheme();
  const navigation = useNavigation();
  const pushAction = StackActions.push("sign-up", {
    step: SIGN_UP_INFORMATION_FORM,
  });

  return (
    <AppLayout title="계정 생성">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            {`서비스 이용을 위한 계정을
생성합니다.`}
          </Text>
          <Text variant="bodyLarge" style={styles.contents}>
            {`본인의 이메일을 이용해 계정을 생성합니다.
본 서비스는 계정을 공유하는 등의 행위를 절대 금합니다.`}
          </Text>
          <View style={styles.textInputBox}>
            <TextInput
              label="이메일"
              value={""}
              textColor={theme.colors.gray500}
              style={styles.textInput}
              theme={{
                colors: {
                  onSurfaceVariant: theme.colors.gray500,
                },
              }}
            />
            <HelperText type="info" style={styles.helpTextInfo}>
              로그인에 사용할 이메일
            </HelperText>
          </View>
          <View style={styles.textInputBox}>
            <TextInput
              label="비밀번호"
              value={""}
              secureTextEntry
              right={
                <TextInput.Icon icon="eye-off" iconColor={theme.colors.white} />
              }
              style={styles.textInput}
              theme={{
                colors: {
                  onSurfaceVariant: theme.colors.gray500,
                },
              }}
            />
            <HelperText type="info" style={styles.helpTextInfo}>
              영문자, 숫자, 기회를 조합한 6자 이상
            </HelperText>
          </View>
          <View style={styles.textInputBox}>
            <TextInput
              label="비밀번호 재설정"
              value={""}
              secureTextEntry
              right={
                <TextInput.Icon icon="eye-off" iconColor={theme.colors.white} />
              }
              style={styles.textInput}
              theme={{
                colors: {
                  onSurfaceVariant: theme.colors.gray500,
                },
              }}
            />
            <HelperText type="info" style={styles.helpTextInfo}>
              위와 같은 비밀번호 재입력
            </HelperText>
          </View>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          onPress={() => {
            navigation.dispatch(pushAction);
          }}
        >
          계정 생성
        </Button>
      </View>
    </AppLayout>
  );
}

export default AccountCreationForm;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  contents: {
    color: theme.colors.gray500,
    marginBottom: 24,
  },
  textInputBox: {
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 4,
    backgroundColor: theme.colors.black,
  },
  helpTextInfo: {
    color: theme.colors.gray500,
  },
});
