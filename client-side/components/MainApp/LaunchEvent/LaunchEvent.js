import { Text, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, Controller } from "react-hook-form";

import { styles } from "../../SignUpForm/FormStyleSheet";
import { LaunchEventController } from "./LaunchEventController";

export const LaunchEvent = ({ navigation, route }) => {
  const credentials = route.params;

  const {
    setValue,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      owner: "credentials.id",
      eventName: "",
      // location: credentials.type === "Firm" ? credentials.address : "",
      date: "",
      ticketLink: "",
      numPeople: "",
      eventDescription: "",
      imageLink: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAwareScrollView>
        <Pressable
          title="Back"
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.backButton}
        >
          <Ionicons name="ios-return-up-back" size={40} color="#FFD158" />
        </Pressable>
        <View style={launchStyles.titleView}>
          <Text style={launchStyles.title}>Launch An Event</Text>
        </View>
        <View>
          <LaunchEventController
            name="Event Name"
            formEntry="eventName"
            control={control}
            errors={errors}
          />
          <LaunchEventController
            name="Location"
            formEntry="location"
            control={control}
            errors={errors}
          />
          <LaunchEventController
            name="Date"
            formEntry="date"
            control={control}
            errors={errors}
          />
          {credentials.type === "Firm" ? (
            <LaunchEventController
              name="Ticket Link"
              formEntry="ticketLink"
              control={control}
              errors={errors}
            />
          ) : (
            <LaunchEventController
              name="Number Of People"
              formEntry="numPeople"
              control={control}
              errors={errors}
            />
          )}
          <LaunchEventController
            name="Description"
            formEntry="eventDescription"
            control={control}
            errors={errors}
          />
          <LaunchEventController
            name="Image"
            formEntry="imageLink"
            control={control}
            errors={errors}
          />
          <View style={[styles.submitView, { flexDirection: "row" }]}>
            <Pressable
              title="Cancel"
              onPress={() => {
                reset();
                navigation.navigate("Home");
              }}
              style={[styles.submit, { backgroundColor: "#FCF2D8" }]}
            >
              <Text style={styles.submitText}>Cancel</Text>
            </Pressable>
            <Pressable
              title="Submit"
              onPress={handleSubmit(onSubmit)}
              style={[styles.submit, { backgroundColor: "#FFD158" }]}
              disabled={false}
            >
              <Text style={styles.submitText}>Launch</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const launchStyles = StyleSheet.create({
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#FFD158",
    borderBottomWidth: 3,
    marginHorizontal: "18%",
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 25,
    color: "#FFD158",
    textAlign: "center",
    padding: "1%",
  },
});
