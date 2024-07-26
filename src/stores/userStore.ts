import {makeAutoObservable, runInAction} from "mobx";
import {DOMAIN_ADDRESS} from "../config/constants.ts";
import {IUserApiResponse} from "../components/types/types.tsx";

class userStore {

    usersData: IUserApiResponse | undefined = undefined;
    user: WebAppUser | undefined = undefined;
    balance: number = 0;
    authorized: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetchAllUsersStore() {
        runInAction(() => {
            fetch(`${DOMAIN_ADDRESS}/api/v1/users/`, {
                headers: {Authorization: `${window.Telegram.WebApp.initData}`},
            })
                .then(response => response.json())
                .then(json => this.usersData = json)
                .catch(e => console.error(e));
        });
    }

    fetchUserData() {
        const tg = window.Telegram.WebApp;
        runInAction(() => {
            this.user = tg.initDataUnsafe?.user;
        });
    }

    userAuthorization() {
        runInAction(() => {
            this.usersData?.results.forEach((user) => {
                if (user.id === this.user?.id) {
                    this.authorized = true;
                }
            });
        });
    }

    tapBalance() {
        runInAction(() => {
            if (this.authorized) {
                this.usersData?.results.forEach((user) => {
                    if (user.id === this.user?.id) {
                        this.balance = user.balance;
                    }
                })
                this.balance += 1;
            }
        })
    }
}

export default new userStore();