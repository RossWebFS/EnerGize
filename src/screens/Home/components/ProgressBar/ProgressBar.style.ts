import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  progressBarContainer: {
    height: 10,
    width: "80%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "green",
  },
  progressText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;
