import api from "./axios";

export const analyzeMood = (message) =>
  api.post("/moods/analyze", {
    message,
  });