import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./FormStyleSheet";

import { FormController } from "./FormController";

export const Personal = ({ control, errors }) => {
  return (
    <View>
      <Text style={styles.formLabel}>Name</Text>
      <FormController control={control} errors={errors} formEntry="name" />
      <Text style={styles.formLabel}>Surname</Text>
      <FormController control={control} errors={errors} formEntry="surname" />
    </View>
  );
};
