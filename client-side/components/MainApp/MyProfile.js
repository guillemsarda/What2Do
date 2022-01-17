import { Text, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../SignUpForm/FormStyleSheet";

export const MyProfile = ({ navigation, route }) => {
  const credentials = route.params;

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
          <Text style={profStyles.formView}>
            <Text style={profStyles.name}>
              {credentials.name} {credentials.surname}
              {"\n"}
            </Text>
            <Text>
              {credentials.type}
              {"\n"}
            </Text>
            {credentials.address ? (
              <Text>
                {credentials.address}
                {"\n"}
              </Text>
            ) : null}
            <Text>
              {credentials.phoneNumber}
              {"\n"}
            </Text>

            <Text style={profStyles.eventsTrack}>
              Events Launched: 0 {"\n"}Events Assisted: 0{"\n"}
            </Text>
            <Text>
              <AntDesign name="twitter" size={24} color="black" />
              {"\n"}
              <AntDesign name="instagram" size={24} color="black" />
              {"\n"}
            </Text>
            <Text>Personal Description:</Text>
          </Text>
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
  formView: {
    fontFamily: "Inter-Light",
    marginTop: "5%",
  },
  formTitle: {
    color: "#AEDFAD",
    fontFamily: "Inter-Regular",
    fontSize: 20,
  },
  name: {
    fontFamily: "Inter-SemiBold",
    fontSize: 15,
  },
  eventsTrack: {
    fontStyle: "italic",
  },
});
