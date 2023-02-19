import React from "react";
import { StyleSheet, View } from "react-native";

import { RadioButton, Text, Button } from "react-native-paper";
import { theme } from "styles/theme";

interface Options {
  value: string;
  text: string;
  description: string;
}

interface BadgeOptionsProps {
  title: string;
  options: Options[];
}

function BadgeRadioOptions({ title, options }: BadgeOptionsProps) {
  const [value, setValue] = React.useState("0");

  return (
    <View>
      <Text variant="headlineSmall" style={styles.title}>
        {title}
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        {options.map((option, idx) => {
          return (
            <View key={idx} style={styles.RadioButtonBox}>
              <RadioButton.Android value={option.value} />
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
                {option.description && (
                  <Text
                    variant="bodySmall"
                    style={{
                      color: theme.colors.gray500,
                    }}
                  >
                    {option.description}
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </RadioButton.Group>
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
            marginBottom: 48,
          }}
        >
          인증자료 제출
        </Button>
      </View>
    </View>
  );
}

export default BadgeRadioOptions;

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
  },
  RadioButtonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
});
