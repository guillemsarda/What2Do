import { CommonActions } from "@react-navigation/native";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../SignUpForm/FormStyleSheet";


export const Appload = ({ navigation }) => {
  setTimeout(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Public" }],
      })
    );
    // navigation.navigate("Public");
  }, 3000);
  return (
    <SafeAreaView
      style={[
        styles.screen,
        { alignContent: "center", justifyContent: "center" },
      ]}
    >
      <ActivityIndicator size="large" color="#FF525B" />
    </SafeAreaView>
  );
};
