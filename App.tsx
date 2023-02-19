import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "styles/theme";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="login" component={Login} />
            <RootStack.Screen name="sign-up" component={SignUp} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
