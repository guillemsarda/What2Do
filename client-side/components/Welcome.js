import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";

export const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>What2Do</Text>
      <Text style={styles.subtitle}>Do you already have an account?</Text>
      <View style={styles.viewButtons}>
        <Pressable
          title="Yes. Sign Me In"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          style={[styles.button, styles.signin]}
        >
          <Text style={styles.textButton}>Yes. Sign Me In.</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={[styles.button, styles.signup]}
        >
          <Text style={styles.textButton}>No. Sign Me Up.</Text>
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
    fontFamily: "Inter-Medium",
    fontSize: 60,
    fontWeight: "500",
    textAlign: "center",
    marginTop: "15%",
    marginBottom: "15%",
  },
  subtitle: {
    fontFamily: "Inter-Medium",
    fontSize: 30,
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "8%",
  },
  viewButtons: {
    alignItems: "center",
  },
  button: {
    width: "60%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginBottom: "5%",
  },
  textButton: {
    fontFamily: "Inter-Medium",
    fontSize: 20,
  },
  signin: {
    backgroundColor: "#D8F1FC",
  },
  signup: {
    backgroundColor: "#DDECFE",
  },
});
