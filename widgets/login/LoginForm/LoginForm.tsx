import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Icon, Button } from "react-native-magnus";

import { useNavigation, StackActions } from "@react-navigation/native";

import { SIGN_UP_INTRODUCTION } from "constants/signUp";

function LoginForm() {
  const navigation = useNavigation();
  const pushAction = StackActions.push("sign-up", {
    step: SIGN_UP_INTRODUCTION,
  });

  return (
    <View style={styles.container}>
      <Text color="gray400">로그인</Text>
      <View>
        <Input
          placeholder="이메일"
          color="gray400"
          h={56}
          px={16}
          py={12}
          mt={24}
          mb={16}
          rounded={4}
          bg="#16181d"
          borderColor="#16181d"
        />
        <Input
          placeholder="비밀번호"
          color="gray400"
          h={56}
          px={16}
          py={12}
          rounded={4}
          bg="#16181d"
          borderColor="#16181d"
          secureTextEntry
          suffix={
            <Icon
              name="visibility-off"
              fontFamily="MaterialIcons"
              fontSize={24}
              color="white"
              rounded="md"
            />
          }
        />
      </View>
      <Button
        w="100%"
        h={40}
        mt={24}
        bg="#F5C750"
        rounded="circle"
        color="black"
        shadow={2}
      >
        로그인
      </Button>
      <View style={styles.linkBox}>
        <Text
          fontSize={14}
          color="white"
          onPress={() => {
            navigation.dispatch(pushAction);
          }}
        >
          회원가입
        </Text>
        <Text fontSize={14} color="white">
          비밀번호 찾기
        </Text>
      </View>
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  linkBox: {
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
