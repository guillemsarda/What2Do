import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

export const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>What2Do</Text>
      <Text style={styles.subtitle}>Do you already have an account?</Text>
      <View style={styles.view_buttons}>
        <Pressable
          title="Yes. Sign Me In"
          onPress={() => {
            navigation.navigate("LogIn", { example: "YESSS" });
          }}
          style={[styles.button, styles.signin]}
        >
          <Text style={styles.text_button}>Yes. Sign Me In.</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={[styles.button, styles.signup]}
        >
          <Text style={styles.text_button}>No. Sign Me Up.</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  title: {
    fontFamily: "Inter-Medium, sans-serif",
    fontSize: 60,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  subtitle: {
    fontFamily: "Inter-Medium, sans-serif",
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  view_buttons: {
    alignItems: "center",
  },
  button: {
    width: 250,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginBottom: 15,
  },
  text_button: {
    fontFamily: "Inter-Light",
    fontSize: 20,
  },
  signin: {
    backgroundColor: "#D8F1FC",
  },
  signup: {
    backgroundColor: "#DDECFE",
  },
});
