import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-magnus";
import { Logo } from "components";

import LoginForm from "widgets/login/LoginForm";

import { theme } from "styles/theme";

function Login() {
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Text fontSize="6xl" color="white">
          {`오’베리에서\n당신의 운명을\n만나보세요.`}
        </Text>
      </View>
      <LoginForm />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: theme.colors.gray800,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 32,
    paddingRight: 32,
  },
  logo: {
    paddingBottom: 32,
  },
});
