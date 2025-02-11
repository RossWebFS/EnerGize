import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  activityTitle: {
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  activityTitleText: {
    fontSize: 24,
    fontWeight: 600,
  },
  statsScroll: {
    columnGap: 20,
    marginHorizontal: "auto",
  },
  activityProgressContainer: {
    flexDirection: "row",
    padding: 20,
    height: 200,
    gap: 5,
  },
  progressBarContainer: {
    flex: 1,
    gap: 6,
  },
  flatList: {
    columnGap: 20,
    paddingHorizontal: 20,
  },
});

export default styles;
