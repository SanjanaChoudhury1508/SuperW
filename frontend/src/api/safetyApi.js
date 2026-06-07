import api from "./axios";

export const createSafetyLog = (data) =>
  api.post("/safety", data);

export const getSafetyLogs = () =>
  api.get("/safety");