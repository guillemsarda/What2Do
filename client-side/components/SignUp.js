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
import { styles } from "./FormStyleSheet";

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
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Sign Me Up</Text>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Type</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
        >
          <Picker.Item label="Firm" value="Firm" color="Red" />
          <Picker.Item label="Personal" value="Personal" />
        </Picker>
        {selectedType === "Personal" ? <Personal /> : <Firm />}
        <Text style={styles.formLabel}>Phone Number</Text>
        <TextInput />
        <Text style={styles.formLabel}>Email</Text>
        <TextInput />
        <Text style={styles.formLabel}>Password</Text>
        <TextInput
          clearButtonMode="always"
          textContentType="password"
          caretHidden={true}
        />
        <Pressable>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
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

