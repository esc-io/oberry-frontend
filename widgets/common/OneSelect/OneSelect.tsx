import React from "react";
import { StyleSheet, View } from "react-native";

import { Text, RadioButton, Button } from "react-native-paper";

import { AppLayout } from "layouts";

import { theme, useAppTheme } from "styles/theme";

function OneSelect() {
  const theme = useAppTheme();

  const [value, setValue] = React.useState("옵션1");

  const options = ["옵션1", "옵션2", "옵션3", "옵션4", "옵션5"];

  return (
    <AppLayout title="정보 제목">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            해당되는 하나를 선택해 주세요.
          </Text>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            {options.map((option, idx) => {
              return (
                <View style={styles.RadioButtonBox}>
                  <RadioButton.Android value={option} />
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.colors.white,
                      marginLeft: 4,
                    }}
                  >
                    {option}
                  </Text>
                </View>
              );
            })}
          </RadioButton.Group>
        </View>
        <Button mode="contained" textColor={theme.colors.black}>
          선택완료
        </Button>
      </View>
    </AppLayout>
  );
}

export default OneSelect;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 32,
    paddingRight: 32,
  },
  title: {
    color: theme.colors.white,
    marginTop: 24,
    marginBottom: 24,
  },
  RadioButtonBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
});
