import { observable, action, computed, autorun } from 'mobx';

class SearchHistory {

    @observable historyList;

    @computed get searchHistoryLength() {

        if (!this.historyList) {
            
            return 0;
        }

        return this.historyList.length;
    }

    @action setHistory(history) {

        this.historyList = history;
    }

    @action getHistory(id) {

        return this.historyList[id];
    }
}

export default new SearchHistory();