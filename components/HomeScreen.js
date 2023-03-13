import { View, Text, Button } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Image Picker"
        onPress={() => navigation.navigate("ImagePicker")}
      />
      <Button
        title="Go to ButtonCount"
        onPress={() => navigation.navigate("ButtonCount")}
      />
      <Button
        title="Go to EditUserDetails"
        onPress={() => navigation.navigate("EditUserDetails")}
      />
      <Button
        title="Go to UserDetails"
        onPress={() => navigation.navigate("UserDetails")}
      />
      <Button
        title="Go to ApiCall"
        onPress={() => navigation.navigate("ApiCall")}
      />
      <Button
        title="Go to ViewPlayground"
        onPress={() => navigation.navigate("ViewPlayground")}
      />
    </View>
  );
};
