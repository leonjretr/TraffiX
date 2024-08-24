import {makeAutoObservable} from "mobx";

class farmStore {

    page:string = "CPU";

    constructor() {
        makeAutoObservable(this);
    }

    setPage1 = () => {
        this.page = "CPU";
    }
    setPage2 = () => {
        this.page = "GPU";
    }
    setPage3 = () => {
        this.page = "RAM";
    }
}

export default new farmStore();
