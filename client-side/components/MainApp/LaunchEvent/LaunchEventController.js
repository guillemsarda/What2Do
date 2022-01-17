import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";

import { styles } from "../../SignUpForm/FormStyleSheet";
import { launchStyles } from "./LaunchEventStyleSheet";

export const LaunchEventController = ({ name, formEntry, errors, control }) => {
  

  return (
    <View>
      <Text style={styles.formLabel}>{name}</Text>
      <Controller
        control={control}
        rules={
          formEntry === "numPeople"
            ? { required: true, pattern: /^\d+$/ }
            : { required: true }
        }
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={
              formEntry === "eventDescription"
                ? [launchStyles.formInput, { height: 100 }]
                : launchStyles.formInput
            }
            clearButtonMode="while-editing"
            autoCapitalize={formEntry === "eventName" ? "words" : null}
            multiline={formEntry === "eventDescription" ? true : false}
          />
        )}
        name={formEntry}
      />
      {errors[formEntry] && formEntry !== "numPeople" && (
        <Text style={[styles.required, { color: "#FFD158" }]}>
          This field is required.
        </Text>
      )}
      {errors[formEntry] && formEntry === "numPeople" && (
        <Text style={[styles.required, { color: "#FFD158" }]}>
          Please, write a single number.
        </Text>
      )}
    </View>
  );
};
