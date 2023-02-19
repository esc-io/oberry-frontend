import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Icon, Button } from "react-native-magnus";

import { useNavigation } from "@react-navigation/native";

import { Logo } from "components";
import { theme } from "styles/theme";

function LoginIntroduce() {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View>
        <View style={styles.logo}>
          <Logo />
        </View>
        <Text fontSize="6xl" color="white">
          {`오’베리에서\n당신의 운명을\n만나보세요.`}
        </Text>
      </View>
      <View style={styles.container}>
        <Text color="gray400">로그인</Text>
        <View>
          <Input
            placeholder="이메일"
            color="gray400"
            h={56}
            px={16}
            py={12}
            mt={24}
            mb={16}
            rounded={4}
            bg="#16181d"
            borderColor="#16181d"
          />
          <Input
            placeholder="비밀번호"
            color="gray400"
            h={56}
            px={16}
            py={12}
            rounded={4}
            bg="#16181d"
            borderColor="#16181d"
            secureTextEntry
            suffix={
              <Icon
                name="visibility-off"
                fontFamily="MaterialIcons"
                fontSize={24}
                color="white"
                rounded="md"
              />
            }
          />
        </View>
        <Button
          w="100%"
          h={40}
          mt={24}
          bg="#F5C750"
          rounded="circle"
          color="black"
          shadow={2}
        >
          로그인
        </Button>
        <View style={styles.linkBox}>
          <Text
            fontSize={14}
            color="white"
            onPress={() => navigation.navigate("sign-up")}
          >
            회원가입
          </Text>
          <Text fontSize={14} color="white">
            비밀번호 찾기
          </Text>
        </View>
      </View>
    </View>
  );
}

export default LoginIntroduce;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: theme.colors.gray800,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 32,
    paddingRight: 32,
  },
  logo: {
    paddingBottom: 32,
  },
  container: {
    marginTop: 24,
  },
  linkBox: {
    marginTop: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
