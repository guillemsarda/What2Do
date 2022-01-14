import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./FormStyleSheet";

export const Personal = ({ control, errors }) => {
  return (
    <View>
      <Text style={styles.formLabel}>Name</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Text style={styles.formLabel}>Surname</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="surname"
      />
      {errors.surname && <Text>This is required.</Text>}
    </View>
  );
};
