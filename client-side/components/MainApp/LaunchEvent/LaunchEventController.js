import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";

import { styles } from "../../SignUpForm/FormStyleSheet";

export const LaunchEventController = ({ name, formEntry, errors, control }) => {
  // Function to determine the keyboard type

  return (
    <View>
      <Text style={styles.formLabel}>{name}</Text>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.formInput}
            clearButtonMode="while-editing"
            autoCapitalize={formEntry === "eventName" ? "words" : null}
          />
        )}
        name={formEntry}
      />
      {errors[formEntry] && (
        <Text style={[styles.required, { color: "#FFD158" }]}>
          This field is required.
        </Text>
      )}
    </View>
  );
};
