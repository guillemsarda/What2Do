import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../../SignUpForm/FormStyleSheet";
import { FiEvHeader } from "./FiEvHeader";

export const PublicEvents = ({ navigation, route }) => {
  const credentials = route.params.credentials;
  const pubEvs = route.params.pubEvs;

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
        <FiEvHeader section="Public" color="#FF525B" navigation={navigation} />
        {credentials.type === "Firm" ? null : (
          <FiEvHeader
            section="Private"
            color="#FCD8DA"
            navigation={navigation}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export const publicStyles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});