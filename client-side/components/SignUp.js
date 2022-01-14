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
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && <Text>This is required.</Text>}
        <Text style={styles.formLabel}>Email</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}
        <Text style={styles.formLabel}>Password</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              clearButtonMode="always"
              textContentType="password"
              caretHidden={true}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
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
