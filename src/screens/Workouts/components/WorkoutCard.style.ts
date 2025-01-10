import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  workoutContainer: {
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  shadowSmartphone: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    marginTop: 8,
  },
});

export default styles;
