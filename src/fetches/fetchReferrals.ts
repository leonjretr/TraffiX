import {IReferralApiResponse} from "../components/types/types.tsx";
import {DOMAIN_ADDRESS} from "../config/constants.ts";

export default async function fetchReferrals(): Promise<IReferralApiResponse | undefined> {
    const init_data = "query_id=AAHJo655AgAAAMmjrnnTUmU6&user=%7B%22id%22%3A6336455625%2C%22first_name%22%3A%22John%22%2C%22last_name%22%3A%22Smollett%22%2C%22username%22%3A%22johnsmolett%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1722007651&hash=88a828d67d7abf5ce709942bbc785e6e3908040ad9d638b4c1535f396c2a13a0";

    try {
        const response = await fetch(`${DOMAIN_ADDRESS}api/v1/users/me/referrals/`, {
            headers: {
                Authorization: init_data
            },
        });

        if (!response.ok) {
            console.error(`Error fetching tasks: ${response.status} ${response.statusText}`);
            return;
        }
        return await response.json();
    } catch(error){
        console.error("Error fetching tasks:", error);
    }
}

//   `${window.Telegram.WebApp.initData}`