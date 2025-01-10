import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    width: 90,
    height: 160,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    color: "#008a00",
    fontSize: 32,
    fontWeight: 600,
  },
  weekdayText: {
    fontSize: 24,
    fontWeight: 600,
  },
});

export default styles;
