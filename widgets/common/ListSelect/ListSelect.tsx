import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Text,
  RadioButton,
  Button,
  Searchbar,
  Menu,
  TextInput,
} from "react-native-paper";

import { theme, useAppTheme } from "styles/theme";

import { AppLayout } from "layouts";

function ListSelect() {
  const theme = useAppTheme();
  const [value, setValue] = React.useState("list");
  const [search, setSearch] = React.useState("");
  const [text, setText] = React.useState("");

  const onChangeSearch = (query: string) => setSearch(query);

  const jobs = [
    "직업 1",
    "직업 2",
    "직업 3",
    "직업 4",
    "직업 5",
    "직업 6",
    "직업 7",
    "직업 8",
    "직업 9",
    "직업 10",
  ];

  return (
    <AppLayout title="직업 선택">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            {`해당되는 직업을 아래에서 
선택해 주세요.`}
          </Text>
          <Text variant="bodyLarge" style={styles.subTitle}>
            해당 직업을 선택할 수 없는 경우, 아래에서 직접 입력할 수 있습니다.
          </Text>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="list"
                uncheckedColor={theme.colors.white}
              />
              <Text
                variant="bodyLarge"
                style={{
                  color: theme.colors.white,
                  marginLeft: 12,
                }}
              >
                리스트에서 선택
              </Text>
            </View>
            <View style={styles.searchbar}>
              <Searchbar
                placeholder="선택해주세요."
                onChangeText={onChangeSearch}
                value={search}
                iconColor={theme.colors.white}
                inputStyle={{
                  color: theme.colors.white,
                }}
                style={{
                  backgroundColor: theme.colors.black,
                  marginBottom: 8,
                }}
                placeholderTextColor={theme.colors.gray500}
              />
              {search.length > 0 && (
                <ScrollView style={styles.menuList}>
                  {jobs.map((job, idx) => {
                    return (
                      <Menu.Item
                        key={idx}
                        title={job}
                        onPress={() => {}}
                        titleStyle={{
                          color: theme.colors.white,
                        }}
                      />
                    );
                  })}
                </ScrollView>
              )}
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="text"
                uncheckedColor={theme.colors.white}
              />
              <Text
                variant="bodyLarge"
                style={{
                  color: theme.colors.white,
                  marginLeft: 12,
                }}
              >
                직접 입력
              </Text>
            </View>
            <TextInput
              placeholder="직접 입력해주세요."
              value={text}
              onChangeText={(text) => setText(text)}
              textColor={theme.colors.white}
              style={styles.textInput}
              theme={{
                colors: {
                  onSurfaceVariant: theme.colors.gray500,
                },
              }}
            />
          </RadioButton.Group>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          // onPress={() => {
          //   navigation.dispatch(pushAction);
          // }}
        >
          선택완료
        </Button>
      </View>
    </AppLayout>
  );
}

export default ListSelect;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 32,
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  subTitle: {
    color: theme.colors.gray500,
    marginBottom: 32,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
  },
  searchbar: {
    position: "relative",
    marginTop: 4,
    zIndex: 1,
  },
  menuList: {
    width: "100%",
    height: 352,
    position: "absolute",
    top: 60,
    backgroundColor: theme.colors.gray600,
    borderRadius: 4,
  },
  textInput: {
    borderRadius: 4,
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
  },
});
