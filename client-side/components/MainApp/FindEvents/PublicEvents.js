import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../../SignUpForm/FormStyleSheet";
import { fiEvStyles } from "./Helpers/FindEventsStyleSheet";
import { FiEvHeader } from "./Helpers/FiEvHeader";
import { Event } from "./Helpers/Event";

export const PublicEvents = ({ navigation, route }) => {
  const credentials = route.params.credentials;
  const pubEvs = route.params.pubEvs;

  const sortedList = pubEvs
    .filter((ev) => Date.now() < new Date(ev.date))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const evList = sortedList.map((ev, i) => {
    return <Event ev={ev} key={i} navigation={navigation} />;
  });
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={fiEvStyles.scrollView}>
        <Pressable
          title="Back"
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.backButton}
        >
          <Ionicons name="ios-return-up-back" size={40} color="#FF525B" />
        </Pressable>
        <View style={fiEvStyles.headerView}>
          <FiEvHeader
            section="Public"
            color="#FF525B"
            navigation={navigation}
          />
          {credentials.type === "Firm" ? null : (
            <FiEvHeader
              section="Private"
              color="#FCD8DA"
              navigation={navigation}
            />
          )}
        </View>
        <View style={fiEvStyles.eventView}>{evList}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
