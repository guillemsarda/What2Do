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

export const Personal = () => {
  return (
    <View>
      <Text>Name</Text>
      <TextInput />
      <Text>Surname</Text>
      <TextInput />
    </View>
  );
};
