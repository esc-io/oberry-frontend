import React from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, Button, TextInput } from "react-native-paper";

import { AppLayout } from "layouts";
import { theme } from "styles/theme";
import { SIGN_UP_BADGE_INTRODUCTION } from "constants/signUp";

function Forwarding() {
  const navigation = useNavigation();
  const pushAction = StackActions.push("sign-up", {
    step: SIGN_UP_BADGE_INTRODUCTION,
  });

  return (
    <AppLayout title="전달사항">
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <KeyboardAwareScrollView
          extraScrollHeight={100}
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View>
              <Text variant="headlineSmall" style={styles.title}>
                {`매니저에게 전달할 내용을
작성해 주세요.`}
              </Text>
              <Text variant="bodyLarge" style={styles.subtitle}>
                {`스스로 말하기 어려운 자랑 매니저에게 전달해
주세요.
매니저가 매칭시 대신해 드립니다.`}
              </Text>
              <TextInput
                placeholder={`예시)

직업 : 패션메거진 그룹에서 사업전략사장으로 재직 중
보유자산 : 현금 약 17억원. 주식  13억원
아파트 : 갤러리아포레 45평 (시세 약 15억)
차량 ; 포르쉐 488
투자유치 : 150억 규모 투자 유치
운동 : 주 3회 헬스?PT 운동, 수영, 서핑 애호가
취향/취미 : 평소 골프 즐기는 편
특별한 경험 : 전세계 24개국 여행 경험
아버지 : 삼성물산 이사재직 중
어머니 : 법무법인 태산 파트너 대표 재직 중
집안 자산 : 부동산/주식 자산 약 24억`}
                multiline={true}
                textColor={theme.colors.white}
                style={styles.textArea}
                theme={{
                  colors: {
                    onSurfaceVariant: theme.colors.gray500,
                  },
                }}
              />
            </View>
            <Button
              mode="contained"
              textColor={theme.colors.black}
              onPress={() => {
                navigation.dispatch(pushAction);
              }}
            >
              다음
            </Button>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </AppLayout>
  );
}

export default Forwarding;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.gray500,
    marginBottom: 24,
  },
  textArea: {
    borderRadius: 8,
    backgroundColor: theme.colors.black,
  },
});
