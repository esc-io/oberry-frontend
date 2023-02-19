import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { Text, Button, Avatar } from "react-native-paper";

import { AppLayout } from "layouts";
import { theme } from "styles/theme";

function CertificationDataSubmit() {
  return (
    <AppLayout title="인증자료 제출">
      <ScrollView>
        <View style={{ ...styles.badgeBackground, ...styles.section }}>
          <View style={styles.badgeImg}>
            <Avatar.Image
              size={56}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </View>
          <Text variant="headlineSmall" style={styles.title}>
            외제차
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            {`출시 오년 이내의 5,000만원 이상의
수입차량 소유 또는 리스`}
          </Text>
        </View>
        <View style={styles.section}>
          <Text variant="headlineSmall" style={styles.title}>
            인증방법
          </Text>
          <View style={styles.descriptionBackground}>
            <View
              style={{
                marginBottom: 10,
              }}
            >
              <Text variant="labelMedium" style={styles.label}>
                [본인 차량]
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 본인 이름이 기재된 자동차 등록증
              </Text>
            </View>
            <View>
              <Text variant="labelMedium" style={styles.label}>
                [리스 차량]
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 자동차보험증권
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 리스 계약서
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text variant="headlineSmall" style={styles.title}>
            유의사항
          </Text>
          <View style={styles.descriptionBackground}>
            <View
              style={{
                marginBottom: 10,
              }}
            >
              <Text variant="labelMedium" style={styles.label}>
                [필수 노출]
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 이름
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 차종
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 연식
              </Text>
            </View>
            <View>
              <Text variant="labelMedium" style={styles.label}>
                [필수 제거]
              </Text>
              <Text variant="labelMedium" style={styles.description}>
                &bull; 주민등록번호 뒷자리
              </Text>
            </View>
          </View>
          <View style={styles.exampleImg}>
            <Text
              variant="labelLarge"
              style={{ ...styles.description, marginBottom: 16 }}
            >
              예시
            </Text>
            <Image
              style={styles.descriptionImg}
              source={{
                uri: "https://www.paperempire.com/ko/files/attach/images/493887/579/507/%EC%96%91%EC%8B%9D.PNG",
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text variant="headlineSmall" style={styles.title}>
            인증자료 첨부
          </Text>
          <View style={styles.fileUploadBox}>
            <View style={styles.upload}>
              <Avatar.Icon
                size={48}
                icon="upload"
                style={{
                  marginBottom: 12,
                }}
              />
              <Text style={styles.label}>자료사진 업로드</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 4,
            }}
          >
            <Text
              variant="labelMedium"
              style={{
                color: theme.colors.pink,
              }}
            >
              &bull; 도용/위조는 중범죄이며, 법적인 처벌을 받을 수 있습니다.
            </Text>
            <Text
              variant="labelMedium"
              style={{
                color: theme.colors.pink,
              }}
            >
              &bull; 모든 인증 서류는 확인용도로만 사용하고 폐기합니다.
            </Text>
          </View>
        </View>
        <Button
          mode="contained"
          textColor={theme.colors.black}
          style={{
            marginBottom: 10,
          }}
        >
          다음
        </Button>
      </ScrollView>
    </AppLayout>
  );
}

export default CertificationDataSubmit;

const styles = StyleSheet.create({
  section: {
    marginBottom: 48,
  },
  badgeImg: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderRadius: 50,
    marginBottom: 24,
  },
  title: {
    color: theme.colors.white,
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.gray500,
    textAlign: "center",
  },
  badgeBackground: {
    backgroundColor: theme.colors.deep_plum,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    borderRadius: 8,
  },
  descriptionBackground: {
    padding: 24,
    backgroundColor: theme.colors.gray900,
    borderRadius: 8,
  },
  label: {
    color: theme.colors.primary,
  },
  description: {
    color: theme.colors.white,
  },
  descriptionImg: {
    width: "100%",
    height: 218,
  },
  exampleImg: {
    marginTop: 16,
  },
  fileUploadBox: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 20,
    height: 190,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  upload: {
    justifyContent: "center",
    alignItems: "center",
  },
});
