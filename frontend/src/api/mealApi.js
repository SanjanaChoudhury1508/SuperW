import api from "./axios";

export const createMeal = (data) =>
  api.post("/meals", data);

export const getMeals = () =>
  api.get("/meals");