import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

import { HomeButtons } from "./HomeButtons";
import { homeStyles } from "./HomeStyleSheet";
import { styles } from "../../SignUpForm/FormStyleSheet";

export const Home = ({ navigation, route }) => {
  const credentials = route.params;
  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        onPress={() => {
          Alert.alert("Are you sure you want to sign out?", null, [
            {
              text: "Yes",
              onPress: () => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [{ name: "Welcome" }],
                  })
                );
              },
              style: "cancel",
            },
            { text: "No" },
          ]);
        }}
        style={homeStyles.logout}
      >
        <SimpleLineIcons name="logout" size={25} color="black" />
      </Pressable>
      <View style={homeStyles.titleView}>
        <Text
          style={[
            styles.title,
            { width: "80%", textAlign: "center", marginTop: "3%" },
          ]}
        >
          Hello, {credentials.name}! 🎉
        </Text>
      </View>
      <View style={homeStyles.buttonsView}>
        <HomeButtons
          title="My Profile"
          color={"#D9FCD8"}
          next="MyProfile"
          navigation={navigation}
        />
        <HomeButtons
          title="Find Events"
          color={"#FCD8DA"}
          next="FindEvents"
          navigation={navigation}
        />
        <HomeButtons
          title="Launch An Event"
          color={"#FCF2D8"}
          next="LaunchEvent"
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};
