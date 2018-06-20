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
                    this.props.weather.map(city => {

                        return <div key={city.id}>
                                    <div
                                        className={styles.innerWrapper}
                                    >
                                        <img src={buildIconUrl(city.icon)} />
                                        <div>
                                            <div>
                                                Main: {city.main}
                                            </div>
                                            <div>
                                                Description: {city.description}
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