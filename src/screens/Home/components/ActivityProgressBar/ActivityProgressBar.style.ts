import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 77,
  },
  progressContainer: {
    height: "100%",
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  activityText: {
    fontSize: 18,
    fontWeight: 600,
  },
});

export default styles;
