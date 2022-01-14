import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";
import { styles } from "./FormStyleSheet";

export const FormController = ({ formEntry, errors, control }) => {
  return (
    <View>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name={formEntry}
      />
      {errors[formEntry] && (
        <Text style={styles.required}>This field is required.</Text>
      )}
    </View>
  );
};
