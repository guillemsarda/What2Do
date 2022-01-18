import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../../SignUpForm/FormStyleSheet";
import { publicStyles } from "./PublicEvents";
import { FiEvHeader } from "./FiEvHeader";
import { Event } from "./Event";

export const PrivateEvents = ({ navigation, route }) => {
  const credentials = route.params.credentials;
  const privEvs = route.params.privEvs;

  const sortedList = privEvs
    .filter((ev) => Date.now() < new Date(ev.date))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const evList = sortedList.map((ev, i) => {
    return <Event ev={ev} key={i} />;
  });

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        title="Back"
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.backButton}
      >
        <Ionicons name="ios-return-up-back" size={40} color="#FF525B" />
      </Pressable>
      <View style={publicStyles.headerView}>
        <FiEvHeader section="Public" color="#FCD8DA" navigation={navigation} />
        <FiEvHeader section="Private" color="#FF525B" navigation={navigation} />
      </View>
      <View>{evList}</View>
    </SafeAreaView>
  );
};
