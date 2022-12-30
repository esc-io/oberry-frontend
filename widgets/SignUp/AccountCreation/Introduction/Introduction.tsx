import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Div, Checkbox, Button } from "react-native-magnus";

import { useLinkTo } from "@react-navigation/native";

import { Logo } from "components";

function Introduction() {
  const linkTo = useLinkTo();

  return (
    <View style={styles.container}>
      <Div>
        <Logo />
        <Text color="white" fontSize={24} mt="2xl" mb="lg">
          환영합니다.
        </Text>
        <Text color="gray500" fontSize={16}>
          회원가입은 보다 나은 서비스를 위해 본인인증 및 제공하신 정보에 대한
          심사과정을 포함합니다.
        </Text>
      </Div>
      <Div>
        <Text color="white" fontSize="lg">
          본 서비스의 정책을 확인 후 시작해 주십시오.
        </Text>
        <Div bg="#16181d" p={24} rounded="md" mt={16} mb={24}>
          <Div row justifyContent="flex-start">
            <Text color="white" fontSize={14} mb={10}>
              서비스 이용약관
            </Text>
            <Text color="#F5C750" fontSize={14}>
              &nbsp;[보기]
            </Text>
          </Div>
          <Div row justifyContent="flex-start">
            <Text color="white" fontSize={14} mb={10}>
              개인정보 수집 및 이용 정책
            </Text>
            <Text color="#F5C750" fontSize={14}>
              &nbsp;[보기]
            </Text>
          </Div>
        </Div>
        <Div mb={24}>
          <Checkbox
            value={1}
            fontSize={24}
            activeColor="#F5C750"
            inactiveColor="gray600"
            suffix={
              <Text color="white" fontSize={16} ml={12}>
                [필수] 서비스 이용약관에 동의
              </Text>
            }
            py={12}
          />
          <Checkbox
            value={2}
            fontSize={24}
            activeColor="#F5C750"
            inactiveColor="gray600"
            suffix={
              <Text color="white" fontSize={16} ml={12}>
                [필수] 개인정보 수집 및 이용 정책에 동의
              </Text>
            }
            py={12}
          />
        </Div>
        <Div>
          <Button w="100%" h={40} bg="#F5C750" rounded="circle" color="black">
            가입하기
          </Button>
          <Button
            w="100%"
            bg="#22242c"
            mt={16}
            onPress={() => linkTo("/login")}
          >
            로그인
          </Button>
        </Div>
      </Div>
    </View>
  );
}

export default Introduction;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 32,
  },
});
