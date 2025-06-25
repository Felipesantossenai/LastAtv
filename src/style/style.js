import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  containerLogin_00: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogin_01: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },
  input: {
    height: 50,
    color: 'white',
    width: 250,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 17,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "white",
    paddingLeft: 50
  },
  button_00: {
    width: 250,
  },

  button_01: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 450,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerHome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  viewIcon: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  iconPassword: {
    position: "absolute",
    top: 12,
    left: "28%"
  },

  iconEmail: {
    position: "absolute",
    top: 12,
    left: "28%"
  }

});
