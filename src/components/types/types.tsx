export interface IStats {
    balance: number;
    profitphour: number;
}

export interface IUser {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    balance: number;
}

export interface IUserApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IUser[];
}

export interface ITasks {
    id: number;
    name: string;
    reward: string;
    icon: string | undefined;
    category: string;
}

export interface ITaskApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ITasks[];
}

export interface IReferral {
    user:number;
    code:string;
}

export interface IReferralApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IReferral[];
}

export interface IFriends {
    id:number;
}

export interface IFriendsApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IFriends[];
}

