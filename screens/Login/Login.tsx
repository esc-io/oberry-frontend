import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-magnus";
import { Logo } from "components";

import { AppLayout } from "layouts";

import LoginForm from "widgets/login/LoginForm";

function Login() {
  return (
    <AppLayout>
      <View style={styles.container}>
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
    </AppLayout>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 32,
  },
  logo: {
    paddingBottom: 32,
  },
});
