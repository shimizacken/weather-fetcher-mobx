import React, { Component } from 'react';
import { buildIconUrl } from '../../../services/openweathermap/utils';
import styles from './styles.scss';

export default class WeatherDetails extends Component {

    render() {
        
        const { data } = this.props;

        const city = data.weather[0];

        return(
            <div
                className={styles.detailsWrapper}
            >
                <div
                    className={styles.cityName}
                >
                    <h2>
                        {data.name} <span className={styles.country}>({data.sys.country})</span> weather today
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
                    Temp: {data.main.temp}°
                </div>
                <div>
                    Pressure: {data.main.pressure}
                </div>
                <div>
                    Humidity: {data.main.humidity}%
                </div>
                <div>
                    Wind: {data.wind.speed}
                </div>
                <div>
                    Clouds: {data.clouds.all}
                </div>
            </div>
        );
    }
}