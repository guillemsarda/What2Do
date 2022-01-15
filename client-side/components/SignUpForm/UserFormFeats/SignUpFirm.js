import React from "react";
import { Text, View } from "react-native";

import { styles } from "../FormStyleSheet";
import { FormController } from "../FormController";

export const Firm = ({ control, errors }) => {
  return (
    <View>
      <Text style={styles.formLabel}>Firm's Name</Text>
      <FormController control={control} errors={errors} formEntry="name" />
      <Text style={styles.formLabel}>Address</Text>
      <FormController control={control} errors={errors} formEntry="address" />
    </View>
  );
};
