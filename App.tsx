import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "styles/theme";

// import Login from "./screens/Login";
// import SignUp from "./screens/SignUp";
import Account from "./screens/Account";
import { BottomNavigation } from "./components";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <RootStack.Screen name="login" component={Login} /> */}
            {/* <RootStack.Screen name="sign-up" component={SignUp} /> */}
            <RootStack.Screen name="account" component={Account} />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
