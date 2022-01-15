import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";

import { homeStyles } from "./HomeStyleSheet";

export const HomeButtons = ({ title, color }) => {
  return (
    <View style={[homeStyles.button, { backgroundColor: color }]}>
      <Pressable>
        <Text style={homeStyles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};
