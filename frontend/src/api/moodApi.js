import api from "./axios";

export const createMood = (data) =>
  api.post("/moods", data);

export const getMoods = () =>
  api.get("/moods");