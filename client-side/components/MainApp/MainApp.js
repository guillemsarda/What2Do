import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { CommonActions } from "@react-navigation/native";

import { Home } from "./Home";
import { MyProfile } from "./MyProfile";
import { FindEvents } from "./FindEvents";
import { LaunchEvent } from "./LaunchEvent/LaunchEvent";

const MainAppRoot = createStackNavigator();

export const MainApp = ({ navigation, route }) => {
  const [credentials, setCredentials] = useState(route.params.credentials[0]);

  return (
    <MainAppRoot.Navigator screenOptions={{ headerShown: false }}>
      <MainAppRoot.Screen
        name="Home"
        component={Home}
        initialParams={credentials}
      />
      <MainAppRoot.Screen
        name="MyProfile"
        component={MyProfile}
        initialParams={credentials}
      />
      <MainAppRoot.Screen
        name="FindEvents"
        component={FindEvents}
        initialParams={credentials}
      />
      <MainAppRoot.Screen
        name="LaunchEvent"
        component={LaunchEvent}
        initialParams={credentials}
      />
    </MainAppRoot.Navigator>
  );
};
