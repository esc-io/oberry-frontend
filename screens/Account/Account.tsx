import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomNavigation } from "components";

const Stack = createNativeStackNavigator();

function Account() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
}

export default Account;
