import { observable, action } from 'mobx';
import { units } from '../services/openweathermap/units';

class Weather {

    @observable currentWeather;
    @observable currentTempType = units.celsius;

    @action setWeather = data => this.currentWeather = data;

    @action setTempType = t => this.currentTempType = t;
}

export default new Weather();