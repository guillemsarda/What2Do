import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

export const LogIn = ({ navigation, route }) => {
  return (
    <View style={styles.general}>
      <Text>Email</Text>
      <TextInput />
      <Text>Password</Text>
      <TextInput />
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
      <Button
        title="Back"
        onPress={() => {
          navigation.navigate("Welcome");
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
