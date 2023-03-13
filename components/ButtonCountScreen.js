import { View, Text, Button } from "react-native";
import { ButtonWithCount, ButtonWithHookCount } from "./Button";

export const ButtonCountScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Button Count</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <ButtonWithCount colour={"black"} />
      <ButtonWithHookCount colour={"black"} />
    </View>
  );
};
