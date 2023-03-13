import { View, Text, Button } from "react-native";
import { UserDetailsStore } from "./PullState";

export const UserDetailsScreen = ({ navigation }) => {
  const firstName = UserDetailsStore.useState((s) => s.firstName);
  const lastName = UserDetailsStore.useState((s) => s.lastName);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User Details</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <Text>firstName: {firstName}</Text>
      <Text>lastName: {lastName}</Text>
    </View>
  );
};
