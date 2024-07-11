import {makeAutoObservable} from "mobx";

class userBalance {
    balance: number = 0;
    profitperhour: number = 0;
    prevBalance: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    tapIncrement() {
        this.balance = this.balance + 1;
    }

    // tapIncrementPPH() {
    //     const updatePPH = () => {
    //         this.prevBalance = this.balance;
    //         this.profitperhour = this.balance - this.prevBalance;
    //     }
    //     const interval = setInterval(updatePPH, 10000);
    //     return () => clearInterval(interval);
    // }
}

export default new userBalance();