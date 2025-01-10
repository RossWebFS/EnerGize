import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  exerciseDetails: {
    flex: 1,
    marginLeft: 10,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseDescription: {
    fontSize: 14,
    color: "gray",
  },
  exerciseRepsSets: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default styles;
