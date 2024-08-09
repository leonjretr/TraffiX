import {makeAutoObservable} from "mobx";

class modalStore {

    isModalUnavailableOpen:boolean = false;
    isModalSettingsOpen:boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setOpenModalUnavailable = () => {
        this.isModalUnavailableOpen = true;
    }
    setCloseModalUnavailable = () => {
        this.isModalUnavailableOpen = false;
    }

    setOpenModalSettings = () => {
        this.isModalSettingsOpen = true;
    }
    setCloseModalSettings = () => {
        this.isModalSettingsOpen = false;
    }
}

export default new modalStore();
