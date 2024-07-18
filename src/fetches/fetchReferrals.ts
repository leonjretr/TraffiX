import {IReferralApiResponse} from "../components/types/types.tsx";
import {DOMAIN_ADDRESS} from "../config/constants.ts";

export default async function fetchReferrals(): Promise<IReferralApiResponse | undefined> {
    const response = await fetch(`${DOMAIN_ADDRESS}/api/v1/users/me/referrals/`);
    return await response.json();
}