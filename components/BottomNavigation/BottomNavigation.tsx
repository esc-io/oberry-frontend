import React from "react";

import {
  BottomNavigation as PaperBottomNavigation,
  Text,
} from "react-native-paper";

import { theme } from "styles/theme";

import UserHome from "containers/account/UserHome";

const homeRoute = () => <Text>Home</Text>;

const messagesRoute = () => <Text>Messages</Text>;

const notificationsRoute = () => <Text>Notifications</Text>;

const accountRoute = () => <UserHome />;

function BottomNavigation() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      focusedIcon: "home",
      unfocusedIcon: "home",
    },
    { key: "messages", focusedIcon: "message-bulleted" },
    { key: "notifications", focusedIcon: "bell" },
    {
      key: "account",
      focusedIcon: "account",
      unfocusedIcon: "account",
    },
  ]);

  const renderScene = PaperBottomNavigation.SceneMap({
    home: homeRoute,
    messages: messagesRoute,
    notifications: notificationsRoute,
    account: accountRoute,
  });

  return (
    <PaperBottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      inactiveColor={theme.colors.gray600}
      activeColor={theme.colors.white}
      theme={{ colors: { secondaryContainer: theme.colors.gray900 } }}
      barStyle={{
        backgroundColor: theme.colors.gray900,
      }}
    />
  );
}

export default BottomNavigation;
