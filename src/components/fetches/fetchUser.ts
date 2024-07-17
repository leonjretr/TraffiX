import {IUserApiResponse} from "../types/types.tsx";

export default async function fetchUsers(): Promise<IUserApiResponse | undefined> {
    const response = await fetch("https://traffix-api.onrender.com/api/v1/users/");
    return response.json();
}




