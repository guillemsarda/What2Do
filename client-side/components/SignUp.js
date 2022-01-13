import React, { useState } from "react";
import {
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { Personal } from "./SignUpPersonal";
import { Firm } from "./SignUpFirm";

export const SignUp = ({ navigation }) => {
  const [form, setForm] = useState({
    type: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [selectedType, setSelectedType] = useState();

  // const { control, handleSubmit } = useForm();

  return (
    <SafeAreaView style={styles.general}>
      <Text>Sign Me Up</Text>
      <Text>Type</Text>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
      >
        <Picker.Item label="Firm" value="Firm" color="Red" />
        <Picker.Item label="Personal" value="Personal" />
      </Picker>
      {selectedType === "Personal" ? <Personal /> : <Firm />}
      <Text>Phone Number</Text>
      <TextInput />
      <Text>Email</Text>
      <TextInput />
      <Text>Password</Text>
      <TextInput
        clearButtonMode="always"
        textContentType="password"
        caretHidden={true}
      />
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
      <Pressable
        title="Back"
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text>Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  general: {
    backgroundColor: "white",
  },
});
