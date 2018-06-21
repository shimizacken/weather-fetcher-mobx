import React, { Component } from 'react';
import classNames from 'classnames';
import { buildIconUrl } from '../../../services/openweathermap/utils';
import styles from './styles.scss';

export default class WeatherDetails extends Component {

    render() {
        
        const { weather } = this.props;

        return(
            <div
                className={styles.root}
            >
                {
                    weather.weather.map(city => {

                        return <div 
                                    key={city.id}
                                    style={{textAlign: 'center'}}
                                >
                                    <div
                                        style={{padding: '15px'}}
                                    >
                                        <img src={buildIconUrl(city.icon)} title={city.main} />
                                    </div>
                                    <div
                                        className={styles.innerWrapper}
                                    >
                                        <div>
                                            <h2>{city.main}</h2>
                                        </div>
                                        <div>
                                            {city.description}
                                        </div>
                                    </div>
                                </div>
                    })
                }
                <div>
                    Temp: {weather.main.temp}
                </div>
                <div>
                    Pressure: {weather.main.pressure}
                </div>
                <div>
                    Humidity: {weather.main.humidity}
                </div>
            </div>
        );
    }
}