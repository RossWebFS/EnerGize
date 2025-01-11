import { WorkoutT } from "@/src/types/workouts";

const filterWorkoutsByDate = (workouts: WorkoutT[]) => {
  const currentDay = new Date().getDate();

  if (workouts.length <= 2) {
    return workouts;
  }

  const index1 = currentDay % workouts.length;
  const index2 = (index1 + 1) % workouts.length;

  return [workouts[index1], workouts[index2]];
};

export default filterWorkoutsByDate;
