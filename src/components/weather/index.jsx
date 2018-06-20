import React, { Component } from 'react';
import classNames from 'classnames';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token'
import styles from './styles.scss';

export default class WeatherContainer extends Component {

    state = {
        cityName: ''
    };

    search = (e) => {

        e.preventDefault();

        if (this.cityName === '') {
            
            return;
        }
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${token()}`;

        console.log(url);        

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .catch(error => console.error(error));
    }

    onChange = (e) => {

        this.setState({
            cityName: e.target.value
        });
    }

    render() {
        
        return(
            <div
                className={styles.root}
            >
                <div
                    className={styles.innerWrapper}
                >
                    <form onSubmit={this.search}>
                        <SearchBoxContainer
                            value={this.state.cityName}
                            onChange={this.onChange}
                        /> <button type='submit'>Search City</button>
                    </form>
                </div>
            </div>
        );
    }
}