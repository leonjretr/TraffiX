import {ITaskApiResponse} from "../components/types/types.tsx";
import {DOMAIN_ADDRESS} from "../config/constants.ts";

export default async function fetchTasks(): Promise<ITaskApiResponse | undefined> {

    // const init_data = "query_id=AAHJo655AgAAAMmjrnlnUJS5&user=%7B%22id%22%3A6336455625%2C%22first_name%22%3A%22John%22%2C%22last_name%22%3A%22Smollett%22%2C%22username%22%3A%22johnsmolett%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1722004600&hash=1fe6cc4dce8e434e6fa97f7ae98f07edad2c69d8e1e69f29298d25b9128f90ac\n";

    // Ensure Telegram WebApp is initialized
    const tg = window.Telegram.WebApp;
    if (!tg.initData) {
        console.error("Telegram WebApp initData is not available");
        return;
    }

    // Fetch tasks with the proper Authorization header
    try {
        const response = await fetch(`${DOMAIN_ADDRESS}/api/v1/tasks/`, {
            headers: {
                Authorization: tg.initData
            },
        });
        // console.log(tg.initData)
        // Handle the response
        if (!response.ok) {
            console.error(`Error fetching tasks: ${response.status} ${response.statusText}`);
            return;
        }
        // Parse the JSON response
        return await response.json();
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
    }
}
