import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, Avatar, List } from "react-native-paper";

import { AppLayout } from "layouts";
import { theme } from "styles/theme";

function UserHome() {
  const navigation = useNavigation();

  const menuList = [
    {
      title: "회원 만남 후기",
      navigate: "",
    },
    {
      title: "포인트 충전",
      navigate: "",
    },
    {
      title: "선호 이성 설정",
      navigate: "PreferredGender",
    },
    {
      title: "지인 만남 차단",
      navigate: "",
    },
  ];

  const settings = [
    {
      title: "비밀번호 변경",
      navigate: "",
    },
    {
      title: "앱 설정",
      navigate: "",
    },
  ];

  return (
    <AppLayout>
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <Avatar.Image
            size={80}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View style={styles.profileContents}>
            <Text variant="titleLarge" style={styles.nickname}>
              레오
            </Text>
            <Text variant="bodyMedium" style={styles.profile}>
              프로필 관리
            </Text>
          </View>
        </View>
        <List.Section style={styles.list}>
          {menuList.map(({ title, navigate }) => {
            return (
              <List.Item
                key={title}
                title={title}
                titleStyle={styles.listItem}
                right={() => (
                  <List.Icon color={theme.colors.white} icon="chevron-right" />
                )}
                onPress={() => navigation.navigate(navigate)}
              />
            );
          })}
        </List.Section>
        <List.Section style={styles.list}>
          {settings.map(({ title }) => {
            return (
              <List.Item
                key={title}
                title={title}
                titleStyle={styles.listItem}
                right={() => (
                  <List.Icon color={theme.colors.white} icon="chevron-right" />
                )}
              />
            );
          })}
        </List.Section>
      </View>
    </AppLayout>
  );
}

export default UserHome;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  profileBox: {
    flexDirection: "row",
    backgroundColor: theme.colors.gray900,
    padding: 24,
    borderRadius: 8,
  },
  profileContents: {
    marginLeft: 32,
  },
  nickname: {
    color: theme.colors.white,
    marginBottom: 8,
  },
  profile: {
    color: theme.colors.primary,
  },
  list: {
    marginTop: 56,
  },
  listItem: {
    color: theme.colors.white,
  },
});
