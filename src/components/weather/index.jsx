import React, { Component } from 'react';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import WeatherDetails from './details';
import { Button } from './button';
import { Loader } from '../portal/loader';
import { request } from '../../services/net/fetch';
import { ErrorMessage } from './errorMessage';
import { units } from '../../services/openweathermap/units';
import styles from './styles.scss';

export default class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        displayLoader: false,
        errorMessage: '',
        weather: undefined
    };
    
    getUrl = buildApiUrl(token());

    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        this.setState({
            displayLoader: true,
            weather: undefined,
            errorMessage: ''
        });

        const url = this.getUrl(this.state.cityName)(units.celsius);

        request(url)
            .then(result => {

                if (result.weather && result.weather.length > 0) {
                    
                    this.setState({
                        weather: result
                    });
                }
                else {

                    if (result && result.message) {

                        this.setState({
                            errorMessage: result.message
                        });
                    }
                }
            })
            .catch(error => {

                this.setState({
                    errorMessage: error
                });
            })
            .finally(_ => {

                this.setState({
                    displayLoader: false
                });
            });
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
                    <form
                        onSubmit={this.search}
                        style={{width: '80%', textAlign: 'center'}}
                    >
                        <SearchBoxContainer
                            value={this.state.cityName}
                            onChange={this.onChange}
                        />
                        <div
                            className={styles.buttonWrapper}
                        >
                            <Button disabled={this.state.displayLoader} />
                        </div>
                    </form>
                    {
                        this.state.weather ?  
                            <div
                                className={styles.detailsWrapper}
                            >
                                <WeatherDetails
                                    weather={this.state.weather}
                                />
                            </div> : null
                    }
                    {
                        this.state.displayLoader ? <Loader /> : null
                    }
                    <ErrorMessage
                        errorMessage={this.state.errorMessage}
                    />                    
                </div>
            </div>
        );
    }
}