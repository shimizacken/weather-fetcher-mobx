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
                <div>
                    <img src={buildIconUrl(this.props.icon)} />
                </div>
                <div>
                    {this.props.main}
                </div>
                <div>
                    {this.props.description}
                </div>
            </div>
        );
    }
}