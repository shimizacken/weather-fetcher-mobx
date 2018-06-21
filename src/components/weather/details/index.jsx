import React, { Component } from 'react';
import classNames from 'classnames';
import { buildIconUrl } from '../../../services/openweathermap/utils';
import styles from './styles.scss';

export default class WeatherDetails extends Component {

    render() {
        
        const { weather } = this.props;

        const city = weather.weather[0];

        return(
            <div
                className={styles.root}
            >
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
            </div>
        );
    }
}