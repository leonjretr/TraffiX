import {makeAutoObservable} from "mobx";

class modalStore {

    isModalUnavailableOpen:boolean = false;
    isModalSettingsOpen:boolean = false;
    isModalFarmCardOpen:boolean = false;

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

    setOpenModalFarmCard = () => {
        this.isModalFarmCardOpen = true;
    }
    setCloseModalFarmCard = () => {
        this.isModalFarmCardOpen = false;
    }
}

export default new modalStore();
