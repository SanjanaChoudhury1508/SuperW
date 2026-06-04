import api from "./axios";

export const createSymptom = (data) =>
  api.post("/symptoms", data);

export const getSymptoms = () =>
  api.get("/symptoms");

export const deleteSymptom = (id) =>
  api.delete(`/symptoms/${id}`);