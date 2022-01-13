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

export const Firm = () => {
  return (
    <View>
      <Text>Firm's Name</Text>
      <TextInput />
      <Text>Address</Text>
      <TextInput />
    </View>
  );
};
