import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";
import { styles } from "./FormStyleSheet";

export const Firm = ({ control, errors }) => {
  return (
    <View>
      <Text style={styles.formLabel}>Firm's Name</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Text style={styles.formLabel}>Address</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="address"
      />
      {errors.address && <Text>This is required.</Text>}
    </View>
  );
};
