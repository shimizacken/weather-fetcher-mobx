import React, { Component } from 'react';
import WeatherContainer from '../weather';
import styles from './styles.scss';

export default class MainPortalContainer extends Component {

    render() {
        
        return(
            <div
                className={styles.root}
            >
                <WeatherContainer />
            </div>
        );
    }
}