import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

export const LogIn = ({ navigation, route }) => {
  return (
    <View style={styles.general}>
      <Text>{route.params.example}</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate("Screen1");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    backgroundColor: "white",
  },
});
