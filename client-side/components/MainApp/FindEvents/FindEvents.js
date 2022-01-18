import { createStackNavigator } from "@react-navigation/stack";

import { PublicEvents } from "./PublicEvents";
import { PrivateEvents } from "./PrivateEvents";

const FindEventsRoot = createStackNavigator();

export const FindEvents = ({ navigation, route }) => {
  const credentials = route.params;

  return (
    <FindEventsRoot.Navigator screenOptions={{ headerShown: false }}>
      <FindEventsRoot.Screen
        name="Public"
        component={PublicEvents}
        initialParams={credentials}
      />
      <FindEventsRoot.Screen
        name="Private"
        component={PrivateEvents}
        initialParams={credentials}
      />
    </FindEventsRoot.Navigator>
  );
};
