import axios from "axios";

const apiURL = "https://one0x-feb-23-node-todo-api.onrender.com/api/todo";

export function getTasks() {
    return axios.get(apiURL + "s");
}

export async function addTask(task) {
    try {
        const res = await axios.post(apiURL + "/create", task);
        if (res && res.data && res.data.task) {
            return res.data.task;
        } else {
            console.error("Unexpected API response", res);
            throw new Error("Unexpected API response");
        }
    } catch (error) {
        console.error("API request failed", error);
        throw error;
    }
}

export async function updateTask(id, task) {
    try {
        const res = await axios.put(apiURL + "/" + id + "/update", task);
        return res.data;
    } catch (error) {
        console.error("ERROR:-" + error.message);
        throw error;
    }
}

export function deleteTask(id) {
    return axios.delete(apiURL + "/" + id + "/delete");
}
