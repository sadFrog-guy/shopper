import {makeAutoObservable} from "mobx";

class SortStore {
    constructor() {
        this.selectedSort = ''

        makeAutoObservable(this)
    }

    setSelectedSort(sort) {
        this.selectedSort = sort
    }
}

export default SortStore