import {ITaskApiResponse} from "../components/types/types.tsx";
import {DOMAIN_ADDRESS} from "../config/constants.ts";

export default async function fetchTasks(): Promise<ITaskApiResponse | undefined> {
    const response = await fetch(`${DOMAIN_ADDRESS}/api/v1/tasks/`);
    return await response.json();
}