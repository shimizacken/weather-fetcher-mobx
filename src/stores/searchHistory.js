import { observable, action, computed, autorun } from 'mobx';

class SearchHistory {

    @observable historyList = [];

    constructor() {

        autorun(_ => console.log('historyList', this.historyList))
    }

    @computed searchHistoryLength() {

        if (!this.historyList) {
            
            return 0;
        }
        
        return this.historyList.length;
    }

    @action setHistory(history) {

        if (!this.historyList) {
            
            this.historyList = [];
        }

        this.historyList.push({
            id: history.id,
            history: history,
            date: new Date()
        });
    }

    @action getHistory(id) {

        return this.historyList[id];
    }
}

export default new SearchHistory();