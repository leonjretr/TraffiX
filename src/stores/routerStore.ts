import {makeAutoObservable} from "mobx";

class routerStore {

    isNavigating:boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setNavigatingTrue() {
        this.isNavigating = true;
    }
    setNavigatingFalse() {
        this.isNavigating = false;
    }
}

export default new routerStore();