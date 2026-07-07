import api from "./api";

export const getAllAppointmentsRequest = async () => {
  const res = await api.get("/appointments");
  return res.data;
};

export const getMyAppointmentsRequest = async () => {
  const res = await api.get("/appointments/mine");
  return res.data;
};

export const createAppointmentRequest = async ({ petId, date, time, reason, notes }) => {
  const res = await api.post("/appointments", { petId, date, time, reason, notes });
  return res.data;
};

export const updateAppointmentStatusRequest = async (id, status, notes) => {
  const res = await api.put(`/appointments/${id}/status`, { status, notes });
  return res.data;
};

export const rescheduleAppointmentRequest = async (id, { date, time }) => {
  const res = await api.put(`/appointments/${id}`, { date, time });
  return res.data;
};

export const deleteAppointmentRequest = async (id) => {
  const res = await api.delete(`/appointments/${id}`);
  return res.data;
};

export const getAvailabilityRequest = async (date) => {
  const res = await api.get(`/appointments/availability?date=${date}`);
  return res.data;
};

export const getMonthSummaryRequest = async (year, month) => {
  const res = await api.get(`/appointments/summary?year=${year}&month=${month}`);
  return res.data;
};