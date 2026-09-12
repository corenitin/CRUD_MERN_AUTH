import api from "./api";

export const getTasks = (page = 1, limit = 10) => {
    return api.get(`/tasks?page=${page}&limit=${limit}`);
};

export const createTask = (task) => {
  return api.post("/tasks", task);
};

export const updateTask = (id, task) => {
  return api.put(`/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return api.delete(`/tasks/${id}`);
};