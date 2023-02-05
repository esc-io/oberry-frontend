import React from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, Button, TextInput } from "react-native-paper";

import { AppLayout } from "layouts";

import { theme } from "styles/theme";

function SelfIntroduction() {
  return (
    <AppLayout title="자기소개">
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
              <View
                style={{
                  marginBottom: 32,
                }}
              >
                <View style={styles.titleBox}>
                  <Text variant="headlineSmall" style={styles.title}>
                    자기소개
                  </Text>
                  <Text style={styles.requiredText}>필수</Text>
                </View>
                <Text variant="bodyLarge" style={styles.subtitle}>
                  성의 있게 작성할수록 매칭 확률이 높습니다.
                </Text>
                <TextInput
                  placeholder={`하고있는 일 > 성장과정 > 취향/취미 > 바램/비전

예시 저는 패션 분야 신사업과 스타트업 투자 등의 일을 하고 있습니다. 20대엔 패션 모델로 활동한 경험이 있었으며 그래서 패션디자인과 예술 분야 등에도 관심이 많습니다.

세상에는 일과 돈 외에 재미있는 것들이 많은 것 같습니다. 이제는 세상의 재밌고 새로운 것들을 함께 경험할 짝을 찾을 수 있었으면 합니다.`}
                  multiline={true}
                  numberOfLines={1}
                  textColor={theme.colors.white}
                  textAlignVertical="top"
                  style={styles.textArea}
                  theme={{
                    colors: {
                      onSurfaceVariant: theme.colors.gray500,
                    },
                  }}
                />
              </View>
              <View>
                <Text variant="headlineSmall" style={styles.title}>
                  매칭된다면
                </Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
                  매칭 후 상대회원과 하고 싶은 것을 적어주세요.
                </Text>

                <TextInput
                  placeholder={`예시)

분위기 좋은 카페에서 거피 마시면서
소통해요.`}
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
            </View>
            <Button mode="contained" textColor={theme.colors.black}>
              다음
            </Button>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </AppLayout>
  );
}

export default SelfIntroduction;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: theme.colors.white,
    marginRight: 4,
  },
  requiredText: {
    color: theme.colors.pink,
    marginTop: 6,
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
