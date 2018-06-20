import React, { Component } from 'react';
import classNames from 'classnames';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import WeatherDetails from './details';
import styles from './styles.scss';

export default class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: ''
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
                        icon: result.weather[0].icon,
                        main: result.weather[0].main,
                        description: result.weather[0].description
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
                        /> <button type='submit'>Search City</button>
                    </form>
                    {
                        !this.state.main ? null : 
                            <div>
                                <WeatherDetails
                                    icon={this.state.icon}
                                    main={this.state.main}
                                    description={this.state.description}
                                />
                            </div>
                    }
                </div>
            </div>
        );
    }
}