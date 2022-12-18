import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-magnus";
import Logo from "../../components/Logo";
import LoginForm from "../../widgets/login/LoginForm/LoginForm";

function Login() {
  return (
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
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#22242c",
    padding: 32,
  },
  logo: {
    paddingBottom: 32,
  },
});
