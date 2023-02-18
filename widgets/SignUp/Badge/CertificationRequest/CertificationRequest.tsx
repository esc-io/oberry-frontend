import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { Text, Button, Avatar } from "react-native-paper";

import { AppLayout } from "layouts";
import { theme } from "styles/theme";

function CertificationRequest() {
  return (
    <AppLayout title="인증 심사 요청">
      <View style={styles.container}>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            뱃지를 선택해 주세요.
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            가능한 뱃지를 모두 선택하고 인증해 주세요.
            {"\n"}
            뱃지의 등급과 개수에 맞는 상대가 매칭됩니다.
            {"\n"}
          </Text>
          <View style={styles.description}>
            <Text variant="bodyLarge" style={styles.subtitle}>
              &bull;
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
              서류 불출분시 반려 후 보완이 필요할 수 있습니다.
            </Text>
          </View>
          <View style={styles.description}>
            <Text variant="bodyLarge" style={styles.subtitle}>
              &bull;
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
              심사 중에는 매칭이 시작되지 않습니다.
            </Text>
          </View>
          <View style={styles.description}>
            <Text variant="bodyLarge" style={styles.subtitle}>
              &bull;
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
              심사완료 시 문자로 알려드립니다.
            </Text>
          </View>
          <View style={styles.description}>
            <Text variant="bodyLarge" style={styles.subtitle}>
              &bull;
            </Text>
            <Text variant="bodyLarge" style={styles.subtitle}>
              주말 및 공휴일이 포함되면 심사기간이 더 소요 될 수 있는 점 양해
              부탁드립니다.
            </Text>
          </View>
        </View>
        <View>
          <Text variant="headlineSmall" style={styles.title}>
            인증 요청한 뱃지
          </Text>
          <View style={styles.badgeList}>
            {Array(9)
              .fill(0)
              .map((_, idx) => {
                return (
                  <View key={idx} style={styles.badge}>
                    <View
                      style={{
                        borderWidth: 2,
                        borderColor: theme.colors.primary,
                        borderRadius: "50%",
                      }}
                    >
                      <Avatar.Image
                        size={56}
                        source={{
                          uri: "https://reactnative.dev/img/tiny_logo.png",
                        }}
                      />
                    </View>
                    <Text
                      variant="labelSmall"
                      style={{
                        color: theme.colors.primary,
                        marginTop: 8,
                      }}
                    >{`뱃지 ${idx}`}</Text>
                  </View>
                );
              })}
          </View>
        </View>
        <Button mode="contained" textColor={theme.colors.black}>
          본인인증 하기
        </Button>
      </View>
    </AppLayout>
  );
}

export default CertificationRequest;

const styles = StyleSheet.create({
  container: {
    height: "95%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.white,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.gray500,
    marginRight: 8,
  },
  description: {
    flexDirection: "row",
  },
  badgeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: -12,
    paddingTop: 12,
  },
  badge: {
    alignItems: "center",
    margin: 12,
  },
});
