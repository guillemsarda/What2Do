import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";

import { Welcome } from "./components/Welcome";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUpForm/SignUp";
import { useState } from "react";
import { Home } from "./components/Home";

const Root = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  async function loadFonts() {
    await Font.loadAsync({
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
    setLoaded(true);
  }
  loadFonts();
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Root.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
