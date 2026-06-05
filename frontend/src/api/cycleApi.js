import api from "./axios";

export const getCycles = () =>
  api.get("/cycles");

export const createCycle = (data) =>
  api.post("/cycles", data);

export const updateCycle = (id, data) =>
  api.put(`/cycles/${id}`, data);

export const deleteCycle = (id) =>
  api.delete(`/cycles/${id}`);

