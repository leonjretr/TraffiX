import {makeAutoObservable} from "mobx";


class guidesPagination {

    page: number = 1;
    showPagination:boolean = false;
    constructor() {
        makeAutoObservable(this);
    }

    pagePagination() {
        this.page = this.page + 1;
        if(this.page===1){
            this.showPagination=true;
        }
        else if(this.page===2){
            this.showPagination=true;
        }
    }
}

export default new guidesPagination();