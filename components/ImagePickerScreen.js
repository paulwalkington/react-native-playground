import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";

import ImageViewer from "./ImageViewer";
import { CustomButton } from "./Button";

const PlaceholderImage = require("../assets/images/background-image.png");

export const ImagePickerScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Image Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
          <CustomButton theme="primary" label="Choose a photo" />
          <CustomButton label="Use this photo" />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 18,
  },
});
