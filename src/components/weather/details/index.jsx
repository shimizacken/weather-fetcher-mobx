import React, { Component } from 'react';
import classNames from 'classnames';
import { buildIconUrl } from '../../../services/openweathermap/utils';
import styles from './styles.scss';

export default class WeatherDetails extends Component {

    render() {
        
        return(
            <div
                className={styles.root}
            >
                {
                    this.props.weather.weather.map(city => {

                        return <div key={city.id}>
                                    <div
                                        className={styles.innerWrapper}
                                    >
                                        <div
                                            style={{padding: '15px'}}
                                        >
                                            <img src={buildIconUrl(city.icon)} title={city.main} />
                                        </div>
                                        <div>
                                            <div>
                                                <h2>{city.main}</h2>
                                            </div>
                                            <div>
                                                {city.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })
                }
            </div>
        );
    }
}