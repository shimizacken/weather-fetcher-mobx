import React, { Component } from 'react';
import classNames from 'classnames';
import SearchBoxContainer from './searchBox';
import styles from './styles.scss';

export default class WeatherContainer extends Component {

    search = (e) => {

        console.log(e);
    }

    render() {
        
        return(
            <div
                className={styles.root}
            >
                <form onSubmit={this.search}>
                    <SearchBoxContainer /> <button type='submit'>Search City</button>
                </form>
            </div>
        );
    }
}