import {IUserApiResponse} from "../components/types/types.tsx";
import {DOMAIN_ADDRESS} from "../config/constants.ts";

export default async function fetchUsers(): Promise<IUserApiResponse | undefined> {
    const response = await fetch(`${DOMAIN_ADDRESS}/api/v1/users/`);
    return response.json();
}




