import { Text, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../SignUpForm/FormStyleSheet";

export const MyProfile = ({ navigation, route }) => {
  const credentials = route.params;

  // We rearrange the phone number:
  function formatNumber(number) {
    let newNumber = number.split("");
    let def;
    def = `${newNumber.slice(0, 3).join("")} ${newNumber
      .slice(3, 6)
      .join("")} ${newNumber.slice(6).join("")}`;

    return def;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        title="Back"
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={[styles.backButton]}
      >
        <Ionicons name="ios-return-up-back" size={40} color="#6EE16B" />
      </Pressable>

      <View style={profStyles.titleView}>
        <Text style={profStyles.title}>My Profile</Text>
      </View>

      <View style={profStyles.piView}>
        <View style={profStyles.formHeader}>
          <Text style={profStyles.formTitle}>Personal Information</Text>
          <MaterialIcons name="edit" size={24} color="#AEDFAD" />
        </View>

        <View>
          <View style={profStyles.each}>
            <Text style={profStyles.name}>
              {credentials.name} {credentials.surname}
            </Text>
          </View>

          <View style={profStyles.each}>
            <Text style={profStyles.eachText}>{credentials.type}</Text>
          </View>

          {credentials.address ? (
            <View style={profStyles.each}>
              <Text style={profStyles.eachText}>{credentials.address}</Text>
            </View>
          ) : null}

          <View style={profStyles.each}>
            <Text style={profStyles.eachText}>
              {formatNumber(`${credentials.phoneNumber}`)}
            </Text>
          </View>

          <View style={profStyles.each}>
            <Text style={[profStyles.eventsTrack, profStyles.eachText]}>
              Events Launched: 0 {"\n"}Events Assisted: 0
            </Text>
          </View>

          <View style={profStyles.each}>
            <Text>
              <AntDesign name="twitter" size={24} color="#6EE16B" />
              {"\n"}
              <AntDesign name="instagram" size={24} color="#6EE16B" />
            </Text>
          </View>

          <View style={profStyles.each}>
            <Text style={profStyles.eachText}>Personal Description:</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const profStyles = StyleSheet.create({
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#6EE16B",
    borderBottomWidth: 3,
    marginHorizontal: "25%",
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 25,
    color: "#6EE16B",
    textAlign: "center",
    padding: "1%",
  },
  piView: {
    marginTop: "5%",
    marginHorizontal: "8%",
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formTitle: {
    color: "#AEDFAD",
    fontFamily: "Inter-Regular",
    fontSize: 22,
  },
  name: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
  },
  eventsTrack: {
    fontStyle: "italic",
  },
  each: {
    marginTop: "2%",
  },
  eachText: {
    fontSize: 20,
    fontFamily: "Inter-Light",
  },
});
