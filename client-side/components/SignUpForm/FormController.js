import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";

import { styles } from "./FormStyleSheet";

export const FormController = ({ formEntry, errors, control }) => {
  // Function to determine the keyboard type
  function keyboard() {
    if (formEntry === "phoneNumber") return "number-pad";
    if (formEntry === "email") return "email-address";
  }

  const mailRegEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return (
    <View>
      <Controller
        control={control}
        rules={
          formEntry === "email"
            ? { required: true, pattern: mailRegEx }
            : { required: true }
        }
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.formInput}
            secureTextEntry={formEntry === "password" ? true : false}
            keyboardType={keyboard()}
            maxLength={formEntry === "phoneNumber" ? 9 : null}
            clearButtonMode="while-editing"
            autoCapitalize={formEntry === "email" ? "none" : null}
          />
        )}
        name={formEntry}
      />
      {errors[formEntry] && formEntry !== "email" && (
        <Text style={styles.required}>This field is required.</Text>
      )}
      {errors[formEntry] && formEntry === "email" && (
        <Text style={styles.required}>
          Please, write a valid email address.
        </Text>
      )}
    </View>
  );
};

// IT MAY BE USEFUL LATER
// function formatNumber(number) {
//   let newNumber = number.split("");
//   let def;
//   if (number.length >= 4 && number.length < 7) {
//     def = `${newNumber.slice(0, 3).join("")} ${newNumber.slice(3).join("")}`;
//   } else if (number.length >= 7) {
//     def = `${newNumber.slice(0, 3).join("")} ${newNumber
//       .slice(3, 6)
//       .join("")} ${newNumber.slice(7).join("")}`;
//   }
//   return def;
// }
