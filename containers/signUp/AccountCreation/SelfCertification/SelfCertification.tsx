import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { AppLayout } from "layouts";

import { theme, useAppTheme } from "styles/theme";
import { SIGN_UP_Account_Creation_Form } from "constants/signUp";

function SelfCertification() {
  const theme = useAppTheme();
  const navigation = useNavigation();

  return (
    <AppLayout title="본인 인증">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            본인 인증이 필요합니다.
          </Text>
          <Text variant="bodyLarge" style={styles.contents}>
            오’베리는 철저한 본인인증을 통해 믿을 수 있는 서비스를 제공하고
            있습니다.
            {"\n"}
            {"\n"}
            신뢰할 수 있는 만남을 위해 모든 회원은 정확한 실명, 나이, 전화번호를
            필수적으로 인증합니다.
            {"\n"}
            {"\n"}
            오베리는 단 한 명의 허위정보 및 유령회원, 타인명의 도용 등이 없는
            서비스를 제공하기 위해 노력하고 있습니다.
          </Text>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          onPress={() => navigation.navigate(SIGN_UP_Account_Creation_Form)}
        >
          본인인증 하기
        </Button>
      </View>
    </AppLayout>
  );
}

export default SelfCertification;

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
  contents: {
    color: theme.colors.gray500,
  },
});
