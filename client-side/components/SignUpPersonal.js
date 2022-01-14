import React, { useState } from "react";
import {
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./FormStyleSheet";

export const Personal = () => {
  return (
    <View>
      <Text style={styles.formLabel}>Name</Text>
      <TextInput />
      <Text style={styles.formLabel}>Surname</Text>
      <TextInput />
    </View>
  );
};
