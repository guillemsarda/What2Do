import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

import { Home } from "./Home";
import { MyProfile } from "./MyProfile";

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
      <MainAppRoot.Screen name="MyProfile" component={MyProfile} />
    </MainAppRoot.Navigator>
  );
};
