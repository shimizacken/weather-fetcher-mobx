import { observable, action, computed } from 'mobx';

class Weather {

    @observable currentWeather;

    @action setWeather(data) {

        this.currentWeather = data;
    }
}

export default new Weather();