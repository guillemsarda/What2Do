import { StyleSheet } from "react-native";

export const launchStyles = StyleSheet.create({
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
  launchForm: {
    marginHorizontal: "10%",
    marginTop: "1%",
  },
  formInput: {
    paddingVertical: "2%",
    paddingHorizontal: "4%",
    fontFamily: "Inter-Medium",
    fontSize: 20,
    height: 45,
    borderWidth: 1,
    borderColor: "#FCF2D8",
  },
  datetimeView: {
    marginRight: "10%",
  },
  datetime: {
    width: "70%",
    marginRight: "10%",
  },
  imagePicker: {
    height: 150,
    backgroundColor: "#F1F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  submitView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "20%",
    marginBottom: "20%",
  },
  submit: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    paddingVertical: "7%",
    borderRadius: 10,
    marginHorizontal: "-10%",
  },
});
