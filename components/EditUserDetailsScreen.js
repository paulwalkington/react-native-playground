import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import { UserDetailsStore } from "./PullState";
import { useState } from "react";

export const EditUserDetailsScreen = ({ navigation }) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const saveDetails = (firstName, lastName) => {
    UserDetailsStore.update((s) => {
      s.firstName = firstName;
      s.lastName = lastName;
    });
    Alert.alert("Details updated");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User Details</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <TextInput
        style={styles.input}
        placeholder="Enter first name"
        onChangeText={(firstName) => setFirstNameInput(firstName)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter last name"
        onChangeText={(lastName) => setLastNameInput(lastName)}
      />

      <Button
        title="Save Details"
        onPress={() => saveDetails(firstNameInput, lastNameInput)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
