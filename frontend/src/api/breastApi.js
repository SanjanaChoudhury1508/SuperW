import api from "./axios";

export const createBreastLog = (data) =>
  api.post("/breast", data);

export const getBreastLogs = () =>
  api.get("/breast");