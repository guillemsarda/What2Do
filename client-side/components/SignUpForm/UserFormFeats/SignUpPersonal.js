import React from "react";
import { Text, View } from "react-native";

import { styles } from "../FormStyleSheet";
import { FormController } from "../FormController";

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
