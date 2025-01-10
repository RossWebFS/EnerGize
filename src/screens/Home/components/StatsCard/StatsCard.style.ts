import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  cardContainer: {
    width: 180,
    height: 140,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 15,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#ffffff52",
    borderRadius: 10,
    alignItems: "center",
    padding: 8,
    marginBottom: 5,
  },
  numberText: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
  unionText: {
    textAlign: "center",
    fontSize: 14,
    color: "#838383",
    fontFamily: "Poppins"
  },
});

export default styles
