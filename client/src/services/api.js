import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("tasks", task);
export const UpdateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

