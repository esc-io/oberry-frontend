import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import BadgeRadioOptions from "./BadgeRadioOptions.widget";
import BadgeCheckboxOptions from "./BadgeCheckboxOptions.widget";

import { AppLayout } from "layouts";

import { theme } from "styles/theme";
import { SIGN_UP_Certification_Request } from "constants/signUp";

function BadgeSelect() {
  const navigation = useNavigation();

  const bodyHeights = [
    {
      value: "none",
      text: "해당 없음",
      description: "",
    },
    {
      value: "1",
      text: "175 이상",
      description: "공식 신체검사 기준 175 cm 이상",
    },
    {
      value: "2",
      text: "180 이상",
      description: "공식 신체검사 기준 180 cm 이상",
    },
  ];

  const degrees = [
    {
      value: "none",
      text: "해당 없음",
      description: "",
    },
    {
      value: "1",
      text: "명문대",
      description: "SKY(서울), KAIST, POSTECH 학사 졸업",
    },
    {
      value: "2",
      text: "유명대",
      description: "서강대, 성균관대, 한양대, 이화여대 학사 졸업",
    },
  ];

  const experiences = [
    {
      checked: false,
      text: "트래블러",
      description: "3년내 총 2만 km 이상 여행",
    },
    {
      checked: true,
      text: "모델경력",
      description: "패션/피팅/방송 등의 모델 경력",
    },
    {
      checked: true,
      text: "미인대회 (여성전용)",
      description: "미스코리아 등 각종 미인대회 출신",
    },
  ];

  return (
    <AppLayout title="뱃지 선택">
      <View style={styles.container}>
        <ScrollView>
          <Text variant="headlineSmall" style={styles.title}>
            뱃지를 선택해 주세요.
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            가능한 뱃지를 모두 선택하고 인증해 주세요.
            {"\n"}
            뱃지의 등급과 개수에 맞는 상대가 매칭됩니다.
            {"\n"}
            인증된 뱃지는 프로필에 표시됩니다.
          </Text>
          <BadgeRadioOptions title="키" options={bodyHeights} />
          <BadgeRadioOptions title="학벌(국내)" options={degrees} />
          <BadgeCheckboxOptions title="경험" options={experiences} />
          <Button
            mode="contained"
            textColor={theme.colors.black}
            style={{
              marginTop: 50,
              marginBottom: 10,
            }}
            onPress={() => navigation.navigate(SIGN_UP_Certification_Request)}
          >
            다음
          </Button>
        </ScrollView>
      </View>
    </AppLayout>
  );
}

export default BadgeSelect;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.gray500,
    marginBottom: 56,
  },
});
