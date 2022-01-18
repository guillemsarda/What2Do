import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import { PublicEvents } from "./PublicEvents";
import { PrivateEvents } from "./PrivateEvents";

const FindEventsRoot = createStackNavigator();

export const FindEvents = ({ navigation }) => {
  return (
    <FindEventsRoot.Navigator screenOptions={{ headerShown: false }}>
      <FindEventsRoot.Screen name="Public" component={PublicEvents} />
      <FindEventsRoot.Screen name="Private" component={PrivateEvents} />
    </FindEventsRoot.Navigator>
  );
};
