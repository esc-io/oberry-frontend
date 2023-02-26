import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomNavigation } from "components";
import PreferredGender from "containers/account/PreferredGender";
import BlockContact from "containers/account/BlockContact";

const Stack = createNativeStackNavigator();

function Account() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="PreferredGender" component={PreferredGender} />
      <Stack.Screen name="BlockContact" component={BlockContact} />
    </Stack.Navigator>
  );
}

export default Account;
