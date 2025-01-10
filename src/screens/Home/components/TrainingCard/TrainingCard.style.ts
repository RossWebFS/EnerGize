import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  imageBackground: {
    width: 375,
    height: 200,
    alignSelf: "center",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 150,
  },
  imageStyle: {
    borderRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  innerContainer: {
    width: 330,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  statsText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default styles
