import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, TextInput, Button, ProgressBar } from "react-native-paper";

import { AppLayout } from "layouts";

import { theme, useAppTheme } from "styles/theme";

function InformationForm() {
  const theme = useAppTheme();

  const formData = [
    {
      label: "이름",
      value: "레오",
      icon: "lock-outline",
    },
    {
      label: "성별",
      value: "남",
      icon: "lock-outline",
    },
    {
      label: "생년월일",
      value: "1995/08/07",
      icon: "lock-outline",
    },
    {
      label: "휴대전화",
      value: "01012341234",
      icon: "lock-outline",
    },
    {
      label: "지역",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "최종학력",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "학교명",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "직업",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "키",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "체형",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "흡연",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "음주",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "종교",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "MBTI",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "결혼 경험",
      value: "-",
      icon: "chevron-right",
    },
    {
      label: "오베리 방문 경로",
      value: "-",
      icon: "chevron-right",
    },
  ];

  return (
    <AppLayout title="기본정보 등록">
      {/* <ProgressBar progress={0.25} color={theme.colors.primary} /> */}
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Text variant="bodyLarge" style={styles.title}>
            매칭을 위한 회원님의 기본정보를 입력해주세요.
          </Text>
          {formData.map(({ label, value, icon }) => {
            return (
              <View key={label} style={styles.textInputBox}>
                <Text variant="labelSmall" style={styles.textInputLabel}>
                  {label}
                </Text>
                <TextInput
                  value={value}
                  editable={false}
                  right={
                    <TextInput.Icon
                      icon={icon}
                      iconColor={theme.colors.white}
                      onPress={() => setVisible(true)}
                    />
                  }
                  style={styles.textInput}
                  theme={{
                    colors: {
                      onSurfaceVariant: theme.colors.gray500,
                    },
                  }}
                />
              </View>
            );
          })}
        </View>
        <Button mode="contained" textColor={theme.colors.black}>
          다음
        </Button>
      </ScrollView>
    </AppLayout>
  );
}

export default InformationForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: theme.colors.gray500,
    marginBottom: 24,
  },
  contents: {
    color: theme.colors.gray500,
    marginBottom: 40,
  },
  textInputBox: {
    marginBottom: 16,
  },
  textInputLabel: {
    color: theme.colors.gray600,
    marginBottom: 4,
  },
  textInput: {
    borderRadius: 4,
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
  },
});
