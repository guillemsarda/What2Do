import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";

import { PublicEvents } from "./PublicEvents";
import { PrivateEvents } from "./PrivateEvents";
import { apiService } from "../../../apiService";
import { Appload } from "./Appload";
import { EventInfo } from "./EventInfo";

const FindEventsRoot = createStackNavigator();

export const FindEvents = ({ navigation, route }) => {
  const credentials = route.params;
  const [pubEvs, setPubEvs] = useState();
  const [privEvs, setPrivEvs] = useState();

  const getEvs = async (type) => {
    if (type === "Firm") {
      data = await apiService.getEvents(type);
      return setPubEvs(data);
    } else {
      data = await apiService.getEvents(type);
      return setPrivEvs(data);
    }
  };

  useEffect(() => {
    getEvs("Firm");
    credentials.type === "Personal" && getEvs("Personal");
  }, []);

  return (
    <FindEventsRoot.Navigator screenOptions={{ headerShown: false }}>
      {pubEvs && (
        <FindEventsRoot.Screen
          name="Public"
          component={PublicEvents}
          initialParams={{ credentials, pubEvs }}
        />
      )}
      {privEvs && (
        <FindEventsRoot.Screen
          name="Private"
          component={PrivateEvents}
          initialParams={{ credentials, privEvs }}
        />
      )}
      <FindEventsRoot.Screen name="Loading" component={Appload} />
      <FindEventsRoot.Screen name="EventInfo" component={EventInfo} />
    </FindEventsRoot.Navigator>
  );
};
