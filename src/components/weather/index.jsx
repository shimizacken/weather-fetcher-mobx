import React, { Component } from 'react';
import classNames from 'classnames';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import WeatherDetails from './details';
import { Button } from './button';
import styles from './styles.scss';

export default class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        weather: []
    };
    
    getUrl = buildApiUrl(token());

    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        const url = this.getUrl(this.state.cityName);

        fetch(url)
            .then((response) => {

                return response.json();
            })
            .then(result => {

                if (result.weather && result.weather.length > 0) {
                 
                    this.setState({
                        weather: result.weather
                    });
                }
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
                        /> <Button />
                    </form>
                    {
                        this.state.weather.length > 0 ?  
                            <div
                                className={styles.detailsWrapper}
                            >
                                <WeatherDetails
                                    weather={this.state.weather}
                                />
                            </div> : null
                    }
                </div>
            </div>
        );
    }
}