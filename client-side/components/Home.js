import { CommonActions } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";

import { HomeButtons } from "./HomeButtons";
import { homeStyles } from "./HomeStyleSheet";
import { styles } from "./SignUpForm/FormStyleSheet";

export const Home = ({ navigation, route }) => {
  const [credentials, setCredentials] = useState(route.params.credentials[0]);

  return (
    <SafeAreaView style={[styles.screen, { alignItems: "center" }]}>
      <Text
        style={[
          styles.title,
          { width: "80%", textAlign: "center", marginTop: "12%" },
        ]}
      >
        Hello, {credentials.name}! 🎉
      </Text>
      <View style={homeStyles.buttonsView}>
        <HomeButtons title="My Profile" color={"#D9FCD8"} />
        <HomeButtons title="Find Events" color={"#FCD8DA"} />
        <HomeButtons title="Launch An Event" color={"#FCF2D8"} />
      </View>
    </SafeAreaView>
  );
};
