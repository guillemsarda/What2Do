import { SafeAreaView, Text, View, Pressable, Alert } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { HomeButtons } from "./HomeButtons";
import { homeStyles } from "./HomeStyleSheet";
import { styles } from "../SignUpForm/FormStyleSheet";

export const Home = ({ navigation, route }) => {
  const credentials = route.params;

  return (
    <SafeAreaView style={[styles.screen]}>
      <Pressable
        onPress={() => {
          Alert.alert("Are you sure you want to sign out?", null, [
            {
              text: "Yes",
              onPress: () => {
                navigation.navigate("Welcome");
              },
              style: "cancel",
            },
            { text: "No" },
          ]);
          //navigation.navigate("Welcome");
        }}
        style={homeStyles.logout}
      >
        <SimpleLineIcons name="logout" size={25} color="black" />
      </Pressable>
      <View style={homeStyles.titleView}>
        <Text
          style={[
            styles.title,
            { width: "80%", textAlign: "center", marginTop: "3%" },
          ]}
        >
          Hello, {credentials.name}! 🎉
        </Text>
      </View>
      <View style={homeStyles.buttonsView}>
        <HomeButtons
          title="My Profile"
          color={"#D9FCD8"}
          next="MyProfile"
          navigation={navigation}
        />
        <HomeButtons title="Find Events" color={"#FCD8DA"} />
        <HomeButtons title="Launch An Event" color={"#FCF2D8"} />
      </View>
    </SafeAreaView>
  );
};
