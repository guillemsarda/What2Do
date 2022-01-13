import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { Welcome } from "./components/Welcome";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";

const Root = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Inter-Black": require("./assets/static/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/static/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/static/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/static/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/static/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/static/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/static/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/static/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/static/Inter-Thin.ttf"),
  });
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Root.Screen name="LogIn" component={LogIn} />
        <Root.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
