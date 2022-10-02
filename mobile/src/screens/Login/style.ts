import { StyleSheet } from "react-native";

const red = "#f92639";
const darkBG = "#212121";
const textWhite = "#e0e9ef";
const textGray = "#d3d5d8";
const redWarning = "#f8153f";
const inputColor = "#454545";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: darkBG,
    marginTop: -70,
  },
  logo: {
    alignSelf: "center",
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    paddingBottom: 20,
  },
  input: {
    alignSelf: "center",
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: inputColor,
    color: textWhite,
    fontWeight: "400",
    fontSize: 16,
  },
  inputError: {
    borderColor: redWarning,
  },
  label: {
    marginLeft: 45,
    color: textGray,
    marginBottom: -7,
    fontSize: 20,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 5,
    width: "80%",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    height: 40,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },
  registerArea: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  registerText: {
    color: "white",
    fontSize: 17,
    marginBottom: 7,
  },
  buttonRegister: {
    marginLeft: 5,
  },
  buttonRegisterText: {
    color: "red",
    alignSelf: "flex-end",
    fontSize: 17,
  },
  socialIcons: {
    alignSelf: "center",
    flexDirection: "row",
  },
});
