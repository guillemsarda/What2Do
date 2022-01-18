import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { format } from "date-fns";

export const Event = ({ ev, navigation }) => {
  return (
    <Pressable
      style={eventStyles.button}
      onPress={() => {
        navigation.navigate("EventInfo", { evInfo: ev });
      }}
    >
      <Image
        source={{ uri: ev.imageLink }}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0.2,
          borderRadius: 15,
        }}
      />
      {ev.numPeople !== "" && (
        <View style={eventStyles.people}>
          <Text style={eventStyles.peopleText}>People: {ev.numPeople}</Text>
        </View>
      )}
      <View style={eventStyles.info}>
        <Text style={eventStyles.eventName}>{ev.eventName}</Text>
        <Text style={eventStyles.location}>{ev.location}</Text>
        <Text style={eventStyles.date}>
          {format(new Date(ev.date), "do 'of' MMMM")}
        </Text>
      </View>
    </Pressable>
  );
};
// "do 'of' MMMM"
const eventStyles = StyleSheet.create({
  button: {
    width: 320,
    height: 200,
    marginTop: "5%",
    borderRadius: 15,
  },
  info: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  people: {
    position: "absolute",
    marginLeft: "3%",
    marginTop: "3%",
  },
  peopleText: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  eventName: {
    fontSize: 30,
    fontFamily: "Inter-SemiBold",
  },
  location: {
    fontSize: 23,
    fontFamily: "Inter-Light",
  },
  date: {
    fontSize: 20,
    fontFamily: "Inter-Light",
  },
});
