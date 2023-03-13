import { ImagePickerScreen } from "./components/ImagePickerScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ButtonCountScreen } from "./components/ButtonCountScreen";
import { UserDetailsScreen } from "./components/UserDetailsScreen";
import { EditUserDetailsScreen } from "./components/EditUserDetailsScreen";
import { ApiCallScreen } from "./components/ApiCallScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewPlaygroundScreen } from "./components/ViewPlaygroundScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="ImagePicker" component={ImagePickerScreen} />
        <Stack.Screen name="ButtonCount" component={ButtonCountScreen} />
        <Stack.Screen
          name="EditUserDetails"
          component={EditUserDetailsScreen}
        />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        <Stack.Screen name="ApiCall" component={ApiCallScreen} />
        <Stack.Screen name="ViewPlayground" component={ViewPlaygroundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
