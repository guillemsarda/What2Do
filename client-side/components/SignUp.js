import React, { useEffect, useState } from "react";
import { TextInput, Pressable, SafeAreaView, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";

import { Personal } from "./SignUpPersonal";
import { Firm } from "./SignUpFirm";
import { styles } from "./FormStyleSheet";
import { FormController } from "./FormController";

export const SignUp = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState("Personal");
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
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  useEffect(() => {
    setValue("type", selectedType);
  });
  return (
    <SafeAreaView style={styles.screen}>
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
            >
              <Picker.Item label="Personal" value="Personal" />
              <Picker.Item label="Firm" value="Firm" />
            </Picker>
          )}
          name="type"
        />

        {selectedType === "Firm" ? (
          <Firm control={control} errors={errors} />
        ) : (
          <Personal control={control} errors={errors} />
        )}
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
        <Pressable title="Submit" onPress={handleSubmit(onSubmit)}>
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
