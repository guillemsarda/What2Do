import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

export const Welcome = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>What2Do</Text>
      <Text style={styles.subtitle}>Do you already have an account?</Text>
      <Button
        title="Sign Me In"
        onPress={() => {
          navigation.navigate("LogIn", { example: "YESSS" });
        }}
      />
      <Button
        title="Sign Me Up"
        onPress={() => {
          navigation.navigate("Screen3");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    height: "100vh",
  },
  title: {
    fontFamily: "Inter-Medium, sans-serif",
    fontSize: 50,
    fontWeight: "300",
    textAlign: "center",
    marginTop: "4vh",
    marginBottom: "10vh",
  },
  subtitle: {
    fontFamily: "Inter-Medium, sans-serif",
    fontSize: 30,
    textAlign: "center",
  },
});
