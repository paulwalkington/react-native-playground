import { View, Text, Button } from "react-native";
import { useState } from "react";
import axios from "axios";

export const ApiCallScreen = ({ navigation }) => {
  const [uuid, setUuid] = useState("");

  const generateUuid = async () => {
    const instance = axios.create({
      baseURL: "http://httpbin.org",
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });

    const response = await instance.get("/uuid");

    setUuid(response.data.uuid);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>API call</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <Text>uuid: {uuid}</Text>
      <Button title="Generate Uuid" onPress={() => generateUuid()} />
    </View>
  );
};
