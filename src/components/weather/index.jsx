import React, { Component } from 'react';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import WeatherDetails from './details';
import { Loader } from '../portal/loader';
import { request } from '../../services/net/fetch';
import { ErrorMessage } from './errorMessage';
import { units } from '../../services/openweathermap/units';
import { Header } from '../portal/header';
import styles from './styles.scss';
import { inject, observer } from 'mobx-react';

@inject('favorites', 'searchHistory') @observer
export default class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        displayLoader: false,
        errorMessage: '',
        data: undefined
    };
    
    searchByCityName = buildApiUrl(token(), units.celsius);

    getWeather = () => {

        const url = this.searchByCityName(this.state.cityName);

        request(url)
            .then(result => {

                if (result.weather && result.weather.length > 0) {
                    
                    this.setState({
                        data: result
                    });

                    let newArr = [];

                    if (this.props.searchHistory.historyList) {
                    
                        newArr = this.props.searchHistory.historyList.slice(0);
                    }
                    
                    newArr.push({
                        id: result.id,
                        history: result,
                        date: new Date()
                    })

                    this.props.searchHistory.setHistory(newArr);
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

    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        this.setState({
            displayLoader: true,
            data: undefined,
            errorMessage: ''
        });

        this.getWeather();
    }

    onChange = (e) => {

        this.setState({
            cityName: e.target.value
        });
    }

    render() {
        
        return(
            <div
                className={styles.mainWeatherWrapper}
            >
                <div
                    className={styles.innerWrapper}
                >
                    <Header />
                    <form
                        onSubmit={this.search}
                    >
                        <SearchBoxContainer
                            value={this.state.cityName}
                            onChange={this.onChange}
                            displayLoader={this.state.displayLoader}
                        />
                    </form>
                    <div
                        className={styles.resultsWrapper}
                    >
                        {
                            this.state.data ?  
                                <div
                                    className={styles.detailsWrapper}
                                >
                                    <WeatherDetails
                                        data={this.state.data}
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
            </div>
        );
    }
}