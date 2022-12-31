import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "styles/theme";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="sign-up" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
