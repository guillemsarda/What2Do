import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Personal } from "./SignUpPersonal";
import { Firm } from "./SignUpFirm";
import { styles } from "./FormStyleSheet";
import { FormController } from "./FormController";

import { apiService } from "../apiService";

export const SignUp = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState("Unknown");
  const {
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: selectedType,
      name: "",
      surname: "",
      address: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    setValue("type", selectedType);
  });

  // On Submit function:
  const onSubmit = (userInfo) => {
    apiService.signUp(userInfo);
    reset();
    navigation.navigate("Home");
  };

  // Function to render the corresponding users form:
  function userForm() {
    if (selectedType === "Firm") {
      return <Firm control={control} errors={errors} />;
    } else if (selectedType === "Personal") {
      return <Personal control={control} errors={errors} />;
    } else return null;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAwareScrollView>
        <Pressable
          title="Back"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Text>Back</Text>
        </Pressable>
        <Text style={styles.title}>Sign Me Up</Text>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Type</Text>
          <Controller
            control={control}
            render={() => (
              <Picker
                selectedValue={selectedType}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedType(itemValue);
                  reset();
                }}
                style={styles.picker}
                itemStyle={styles.pickerItem}
              >
                <Picker.Item label="Type of user..." value="Unknown" />
                <Picker.Item label="Personal" value="Personal" />
                <Picker.Item label="Firm" value="Firm" />
              </Picker>
            )}
            name="type"
          />
          {userForm()}

          <Text style={styles.formLabel}>Phone Number</Text>
          <FormController
            control={control}
            errors={errors}
            formEntry="phoneNumber"
          />
          <Text style={styles.formLabel}>Email</Text>
          <FormController control={control} errors={errors} formEntry="email" />
          <Text style={styles.formLabel}>Password</Text>
          <FormController
            control={control}
            errors={errors}
            formEntry="password"
          />
          <View style={styles.submitView}>
            <Pressable
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              style={styles.submit}
              disabled={selectedType === "Unknown" ? true : false}
            >
              <Text style={styles.submitText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
