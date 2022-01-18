import { Pressable, View, Image, Text, StyleSheet } from "react-native";

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
        style={{ width: "100%", height: "100%", opacity: 0.5 }}
      />
      {ev.numPeople !== "" && (
        <View>
          <Text>People: {ev.numPeople}</Text>
        </View>
      )}
      <View>
        <Text>{ev.eventName}</Text>
        <Text>{ev.location}</Text>
        <Text>{ev.date}</Text>
      </View>
    </Pressable>
  );
};

const eventStyles = StyleSheet.create({
  button: {
    width: 330,
    height: 200,
  },
});
