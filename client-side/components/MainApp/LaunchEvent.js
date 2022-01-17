import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../SignUpForm/FormStyleSheet";

export const LaunchEvent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        title="Back"
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.backButton}
      >
        <Ionicons name="ios-return-up-back" size={40} color="#FFD158" />
      </Pressable>
      <Text>Here you'll launch an event</Text>
    </SafeAreaView>
  );
};
