const getWeekDay = (date: Date) => {
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

export default getWeekDay;
