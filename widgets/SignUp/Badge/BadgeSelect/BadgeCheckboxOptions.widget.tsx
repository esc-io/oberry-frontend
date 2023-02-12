import React from "react";
import { StyleSheet, View } from "react-native";

import { Checkbox, Text, Button } from "react-native-paper";

import { theme } from "styles/theme";

interface Options {
  checked: boolean;
  text: string;
  description: string;
}

interface BadgeCheckboxOptions {
  title: string;
  options: Options[];
}

function BadgeCheckboxOptions({ title, options }: BadgeCheckboxOptions) {
  return (
    <View>
      <Text variant="headlineSmall" style={styles.title}>
        {title}
      </Text>
      <View>
        {options.map((option, idx) => {
          return (
            <View key={idx} style={styles.checkbox}>
              <View style={styles.checkboxItem}>
                <Checkbox.Item
                  mode="android"
                  label=""
                  status={option.checked ? "checked" : "unchecked"}
                />
                <View
                  style={{
                    marginLeft: 4,
                  }}
                >
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.colors.white,
                    }}
                  >
                    {option.text}
                  </Text>
                  <Text
                    variant="bodySmall"
                    style={{
                      color: theme.colors.gray500,
                    }}
                  >
                    {option.description}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Button
                  mode="contained"
                  icon="chevron-right"
                  textColor={theme.colors.black}
                  contentStyle={{ flexDirection: "row-reverse" }}
                  style={{
                    marginTop: 16,
                    marginBottom: 24,
                  }}
                >
                  인증자료 제출
                </Button>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default BadgeCheckboxOptions;

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
    // marginRight: 4,
  },
  checkbox: {
    display: "flex",
    flexDirection: "column",
  },
  checkboxItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -12,
  },
});
