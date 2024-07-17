import {IReferralApiResponse} from "../types/types.tsx";

export default async function fetchReferrals(): Promise<IReferralApiResponse | undefined> {
    const response = await fetch("https://traffix-api.onrender.com/api/v1/users/me/referrals/");
    return await response.json();
}