import React, { Component } from 'react';
import { buildIconUrl } from '../../../services/openweathermap/utils';
import styles from './styles.scss';

export default class WeatherDetails extends Component {

    render() {
        
        const { weather } = this.props;

        const city = weather.weather[0];

        return(
            <div
                className={styles.detailsWrapper}
            >
                <div
                    className={styles.cityName}
                >
                    <h2>
                        {weather.name} <span className={styles.country}>({weather.sys.country})</span> weather today
                    </h2>
                </div>
                <div
                    className={styles.iconWrapper}
                >
                    <img
                        src={buildIconUrl(city.icon)}
                        title={city.main}
                    />
                </div>
                <div>
                    <h1>
                        {city.main}
                    </h1> / {city.description}
                </div>
                <div>
                    Temp: {weather.main.temp}°
                </div>
                <div>
                    Pressure: {weather.main.pressure}
                </div>
                <div>
                    Humidity: {weather.main.humidity}%
                </div>
                <div>
                    Wind: {weather.wind.speed}
                </div>
                <div>
                    Clouds: {weather.clouds.all}
                </div>
            </div>
        );
    }
}