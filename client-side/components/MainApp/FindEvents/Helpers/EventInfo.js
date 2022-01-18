import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";

import { styles } from "../../../SignUpForm/FormStyleSheet";

export const EventInfo = ({ route, navigation }) => {
  const evInfo = route.params.evInfo;

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <Ionicons name="ios-return-up-back" size={40} color="#FF525B" />
      </Pressable>
      <View style={{ width: "100%", height: "25%" }}>
        <Image
          source={{ uri: evInfo.imageLink }}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.5,
            overflow: "hidden",
          }}
        />
      </View>
      <View style={eventInfoStyles.eventInfoView}>
        <View style={eventInfoStyles.titleView}>
          <Text style={eventInfoStyles.titleText}>{evInfo.eventName}</Text>
        </View>
        <View>
          {evInfo.numPeople !== "" && (
            <Text style={[eventInfoStyles.mainText]}>
              <Text style={eventInfoStyles.entry}>People:</Text>{" "}
              {evInfo.numPeople}
            </Text>
          )}
          <Text style={[eventInfoStyles.mainText]}>
            <Text style={eventInfoStyles.entry}>Location:</Text>{" "}
            {evInfo.location}
          </Text>
          <Text style={[eventInfoStyles.mainText]}>
            <Text style={eventInfoStyles.entry}>Date:</Text>{" "}
            {format(new Date(evInfo.date), "do 'of' MMMM 'at' HH:mm")}
          </Text>
          <Text style={[eventInfoStyles.mainText]}>
            <Text style={eventInfoStyles.entry}>Description:</Text>{" "}
            {evInfo.eventDescription}
          </Text>
        </View>
        {/* TODO Add Request Button */}
        {(() => {
          if (evInfo.type === "Firm" && evInfo.ticketLink !== "")
            return (
              <Pressable
                style={eventInfoStyles.buy}
                onPress={() => {
                  Linking.openURL(evInfo.ticketLink);
                }}
              >
                <Text style={eventInfoStyles.buyText}>Buy Tickets</Text>
              </Pressable>
            );
        })()}
      </View>
    </SafeAreaView>
  );
};

const eventInfoStyles = StyleSheet.create({
  eventInfoView: {
    marginHorizontal: "8%",
  },
  titleView: {
    marginTop: "3%",
  },
  titleText: {
    fontFamily: "Inter-Bold",
    fontSize: 35,
  },
  mainText: {
    fontFamily: "Inter-Light",
    fontSize: 20,
    marginTop: "3%",
  },
  entry: {
    fontFamily: "Inter-ExtraLight",
    fontSize: 17,
  },
  location: {
    marginTop: 10,
  },
  buy: {
    backgroundColor: "#FF525B",
    marginTop: "8%",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    paddingVertical: "5%",
    borderRadius: 10,
  },
  buyText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
    color: "white",
  },
});
