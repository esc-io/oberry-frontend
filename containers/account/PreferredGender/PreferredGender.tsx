import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Checkbox, Text, Button } from "react-native-paper";
import RangeSlider from "react-native-range-slider-expo";

import { AppLayout } from "layouts";

import { theme } from "styles/theme";

function PreferredGender() {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const appearanceTypes = [
    {
      value: "귀여운",
      checked: true,
    },
    {
      value: "지적인",
      checked: true,
    },
    {
      value: "섹시한",
      checked: true,
    },
    {
      value: "푸근한",
      checked: false,
    },
    {
      value: "시크한",
      checked: false,
    },
    {
      value: "따뜻한",
      checked: false,
    },
  ];

  const bodyTypes = [
    {
      value: "마른",
      checked: true,
    },
    {
      value: "슬림",
      checked: true,
    },
    {
      value: "건장한",
      checked: false,
    },
    {
      value: "근육질",
      checked: false,
    },
    {
      value: "통통한",
      checked: false,
    },
  ];

  const heightTypes = [
    {
      value: "아담한 키",
      checked: true,
    },
    {
      value: "보통",
      checked: true,
    },
    {
      value: "큰 키",
      checked: false,
    },
  ];

  return (
    <AppLayout title="선호 이성 설정">
      <ScrollView style={styles.container}>
        <Text variant="headlineSmall" style={styles.title}>
          원하는 이성을 알려주세요
        </Text>
        <Text variant="bodyLarge" style={styles.description}>
          선택하신 설정에 따라 추천받는 회원수가 달라집니다. 가급적 폭넓게
          선택해서 많은 추천을 받아보세요.
        </Text>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            나이
          </Text>
          <RangeSlider
            min={25}
            max={55}
            fromValueOnChange={(value) => setFromValue(value)}
            toValueOnChange={(value) => setToValue(value)}
            initialFromValue={30}
            fromKnobColor={theme.colors.primary}
            toKnobColor={theme.colors.primary}
            inRangeBarColor={theme.colors.primary}
            outOfRangeBarColor={theme.colors.gray500}
            rangeLabelsTextColor={theme.colors.gray500}
            barHeight={2}
          />
        </View>
        <View style={styles.checkList}>
          <View>
            <Text variant="headlineSmall" style={styles.title}>
              외모&nbsp;
              <Text variant="labelLarge" style={styles.subtitle}>
                필수 3개 이상
              </Text>
            </Text>
          </View>
          <View>
            {appearanceTypes.map(({ value, checked }) => {
              return (
                <Checkbox.Item
                  mode="android"
                  label={value}
                  status={checked ? "checked" : "unchecked"}
                  style={{
                    flexDirection: "row-reverse",
                  }}
                  labelStyle={{
                    color: theme.colors.white,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.checkList}>
          <View>
            <Text variant="headlineSmall" style={styles.title}>
              체형&nbsp;
              <Text variant="labelLarge" style={styles.subtitle}>
                필수 3개 이상
              </Text>
            </Text>
          </View>
          <View>
            {bodyTypes.map(({ value, checked }) => {
              return (
                <Checkbox.Item
                  mode="android"
                  label={value}
                  status={checked ? "checked" : "unchecked"}
                  style={{
                    flexDirection: "row-reverse",
                  }}
                  labelStyle={{
                    marginLeft: 0,
                    color: theme.colors.white,
                  }}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.checkList}>
          <View>
            <Text variant="headlineSmall" style={styles.title}>
              키&nbsp;
              <Text variant="labelLarge" style={styles.subtitle}>
                필수 1개 이상
              </Text>
            </Text>
          </View>
          <View>
            {heightTypes.map(({ value, checked }) => {
              return (
                <Checkbox.Item
                  mode="android"
                  label={value}
                  status={checked ? "checked" : "unchecked"}
                  style={{
                    flexDirection: "row-reverse",
                  }}
                  labelStyle={{
                    marginLeft: 0,
                    color: theme.colors.white,
                  }}
                />
              );
            })}
          </View>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          style={{
            marginTop: 48,
            marginBottom: 10,
          }}
        >
          저장
        </Button>
      </ScrollView>
    </AppLayout>
  );
}

export default PreferredGender;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    flexDirection: "column",
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  description: {
    color: theme.colors.gray500,
    marginBottom: 56,
  },
  subtitle: {
    color: theme.colors.pink,
  },
  checkList: {
    marginTop: 48,
  },
});
