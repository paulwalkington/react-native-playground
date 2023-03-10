import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Component } from "react";

import {
  Button,
  ButtonWithCount,
  ButtonWithHookCount,
} from "./components/Button";
import ImageViewer from "./components/ImageViewer";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        {/* <Button label="Use this photo" /> */}
        {/* <TextInANest></TextInANest> */}
        <ButtonWithCount />
        <ButtonWithHookCount />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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
