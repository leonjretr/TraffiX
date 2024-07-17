import {ITaskApiResponse} from "../types/types.tsx";

export default async function fetchTasks(): Promise<ITaskApiResponse | undefined> {
    const response = await fetch("https://traffix-api.onrender.com/api/v1/tasks/");
    const data = await response.json();
    return data;
}