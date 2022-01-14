import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  title: {
    fontFamily: "Inter-Medium",
    fontSize: 50,
    fontWeight: "500",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "8%",
  },
  form: {
    backgroundColor: "#DDECFE",
    padding: "5%",
    marginBottom: "5%",
    marginHorizontal: "15%",
    borderRadius: 15,
  },
  formLabel: {
    fontFamily: "Inter-Medium",
    marginTop: "5%",
    marginBottom: "2%",
    fontSize: 20,
  },
  formInput: {
    backgroundColor: "white",
    paddingVertical: "2%",
    paddingHorizontal: "4%",
    fontFamily: "Inter-Medium",
    fontSize: 20,
    height: 35,
  },
  required: {
    fontFamily: "Inter-Medium",
    fontSize: 10,
    color: "red",
    marginBottom: "-1.5%",
  },
  submitView: {
    alignItems: "center",
  },
  submit: {
    backgroundColor: "#8BC6FD",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    paddingVertical: "5%",
    borderRadius: 10,
  },
  submitText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
  },
  picker: {
    height: 115,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#F4F9FF",
  },
  pickerItem: {
    height: "100%",
    width: "100%",
    fontFamily: "Inter-Medium",
    fontSize: 20,
  },
});
