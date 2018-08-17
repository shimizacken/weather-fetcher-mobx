import React, { Component } from 'react';
import { Header } from './header';
import WeatherContainer from '../weather';
import SearchHistoryContainer from '../weather/searchHistory';
import styles from './styles.scss';

export default class MainPortalContainer extends Component {

    render() {
        
        return(
            <div
                className={styles.root}
            >
                <Header />
                <SearchHistoryContainer />
                <WeatherContainer />
            </div>
        );
    }
}