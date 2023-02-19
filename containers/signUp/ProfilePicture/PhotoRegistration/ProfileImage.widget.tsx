import { StyleSheet, Image, View } from "react-native";

import { Avatar } from "react-native-paper";

import { theme } from "styles/theme";

interface ProfileImageProps {
  uri?: string;
}

function ProfileImage({ uri }: ProfileImageProps) {
  return (
    <View>
      {uri ? (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Avatar.Icon style={styles.deleteIcon} icon="close" size={24} />
        </View>
      ) : (
        <View style={styles.blankImage}>
          <Avatar.Icon
            size={48}
            icon="plus"
            color={theme.colors.black}
            style={{
              backgroundColor: theme.colors.gray600,
            }}
          />
        </View>
      )}
    </View>
  );
}

export default ProfileImage;

const styles = StyleSheet.create({
  image: {
    position: "relative",
    width: 84,
    height: 84,
    flexGrow: 0,
  },
  deleteIcon: {
    position: "absolute",
    top: -5,
    right: -5,
    color: theme.colors.black,
    backgroundColor: theme.colors.pink,
  },
  blankImage: {
    width: 84,
    height: 84,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray600,
    borderRadius: 20,
  },
});
