import React, { Component } from 'react';
import classNames from 'classnames';
import WeatherContainer from '../weather';
import styles from './styles.scss';

export default class MainContainer extends Component {

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