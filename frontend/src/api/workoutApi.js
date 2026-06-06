import api from "./axios";

export const createWorkout = (data) =>
  api.post("/workouts", data);

export const getWorkouts = () =>
  api.get("/workouts");