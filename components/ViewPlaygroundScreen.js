import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import { UserDetailsStore } from "./PullState";
import { useState } from "react";

export const ViewPlaygroundScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navigationBarContainer}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button
          title="Image Picker"
          onPress={() => navigation.navigate("ImagePicker")}
        />
        <Button
          title="ButtonCount"
          onPress={() => navigation.navigate("ButtonCount")}
        />
        <Button
          title="EditUserDetails"
          onPress={() => navigation.navigate("EditUserDetails")}
        />
        <Button
          title="UserDetails"
          onPress={() => navigation.navigate("UserDetails")}
        />
        <Button
          title="ApiCall"
          onPress={() => navigation.navigate("ApiCall")}
        />
        <Button
          title="ViewPlayground"
          onPress={() => navigation.navigate("ViewPlayground")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={{ backgroundColor: "blue", flex: 0.5 }} />
          <View style={{ backgroundColor: "red", flex: 0.5 }} />
        </View>
        <View style={styles.middle} />
        <View style={styles.bottom} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
  },
  navigationBarContainer: {
    flex: 0.3,
    justifyContent: "space-between",
    backgroundColor: "blue",
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    flexDirection: "row",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
