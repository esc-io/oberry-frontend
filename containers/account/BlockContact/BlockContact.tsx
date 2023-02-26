import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

import { AppLayout } from "layouts";
import { theme } from "styles/theme";

function BlockContact() {
  return (
    <AppLayout title="지인 만남 차단">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            아는 사람 소개받지 않기
          </Text>
          <Text variant="bodyLarge" style={styles.description}>
            휴대전화에 등록된 전화번호를 통해서 매칭을 피할 수 있습니다.
            {"\n"}
            등록된 번호의 회원끼리는 서로 소개되지 않습니다.
          </Text>
        </View>
        <View
          style={{
            width: "60%",
            alignSelf: "center",
            margin: "auto",
          }}
        >
          <Button
            mode="outlined"
            icon="plus"
            textColor={theme.colors.primary}
            contentStyle={{ flexDirection: "row-reverse" }}
            style={{
              borderColor: theme.colors.primary,
              marginBottom: 16,
            }}
          >
            차단 전화번호 등록
          </Button>
          <Button mode="outlined" textColor={theme.colors.gray600}>
            나중에 하기
          </Button>
        </View>
      </View>
    </AppLayout>
  );
}

export default BlockContact;

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
});
