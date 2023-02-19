import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginIntroduce from "containers/login/LoginIntroduce";

const Stack = createNativeStackNavigator();

function Login() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginIntroduce"} component={LoginIntroduce} />
    </Stack.Navigator>
  );
}

export default Login;
