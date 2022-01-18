import { Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../SignUpForm/FormStyleSheet";

export const EventInfo = ({ route }) => {
  const evInfo = route.params.evInfo;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ width: 400, height: 150 }}>
        <Image
          source={{ uri: evInfo.imageLink }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View>
        <Text>{evInfo.eventName}</Text>
      </View>
      <View>
        {evInfo.numPeople !== "" && <Text>People: {evInfo.numPeople}</Text>}
        <Text>Location: {evInfo.location}</Text>
        <Text>Date: {evInfo.date}</Text>
        <Text>Description: {evInfo.eventDescription}</Text>
      </View>
      {/* TODO Add Request Button */}
      {() => {
        if (evInfo.type === "Firm" && evInfo.ticketLink !== "")
          return (
            <Pressable>
              <Text>Buy Tickets</Text>
            </Pressable>
          );
      }}
    </SafeAreaView>
  );
};
