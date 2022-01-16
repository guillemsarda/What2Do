import { Text, View, Pressable, SafeAreaView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./SignUpForm/FormStyleSheet";
import { FormController } from "./SignUpForm/FormController";
import { apiService } from "../apiService";

export const SignIn = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // On Submit function:
  const onSubmit = async (userInfo) => {
    const found = await apiService.signIn(userInfo);
    if (found) {
      reset();
      navigation.navigate("MainApp", { credentials: found });
    } else {
      reset({ email: userInfo.email, password: "" });
      Alert.alert("Wrong email/password", "Please, try again", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAwareScrollView>
        <Pressable
          title="Back"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
          style={styles.backButton}
        >
          <Ionicons name="ios-return-up-back" size={40} color="#8BC6FD" />
        </Pressable>
        <Text style={styles.title}>Sign Me In</Text>
        <View style={[styles.form, { backgroundColor: "#D8F1FC" }]}>
          <Text style={styles.formLabel}>Email</Text>
          <FormController control={control} errors={errors} formEntry="email" />
          <Text style={styles.formLabel}>Password</Text>
          <FormController
            control={control}
            errors={errors}
            formEntry="password"
          />
          <View style={styles.submitView}>
            <Pressable
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              style={styles.submit}
            >
              <Text style={styles.submitText}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
