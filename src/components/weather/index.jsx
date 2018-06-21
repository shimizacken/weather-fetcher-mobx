import React, { Component } from 'react';
import classNames from 'classnames';
import SearchBoxContainer from './searchBox';
import { token } from '../../services/openweathermap/token';
import { buildApiUrl } from '../../services/openweathermap/utils';
import WeatherDetails from './details';
import { Button } from './button';
import { Loader } from '../portal/loader';
import styles from './styles.scss';

export default class WeatherContainer extends Component {

    state = {
        cityName: '',
        icon: '',
        main: '',
        description: '',
        displayLoader: false,
        weather: []
    };
    
    getUrl = buildApiUrl(token());

    search = (e) => {

        e.preventDefault();

        if (this.state.cityName === '') {
            
            return;
        }
        
        this.setState({
            displayLoader: true,
            weather: []
        });

        const url = this.getUrl(this.state.cityName);

        const mock = {"coord":{"lon":35.23,"lat":31.78},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":301.92,"pressure":1015,"humidity":48,"temp_min":301.15,"temp_max":303.15},"visibility":10000,"wind":{"speed":4.1,"deg":270},"clouds":{"all":0},"dt":1529576400,"sys":{"type":1,"id":5913,"message":0.0653,"country":"PS","sunrise":1529548447,"sunset":1529599666},"id":281184,"name":"Jerusalem","cod":200};
        
        setTimeout(() => {

            this.setState({
                weather: mock.weather,
                displayLoader: false
            });

        }, 1500);


        // fetch(url)
        //     .then((response) => {

        //         return response.json();
        //     })
        //     .then(result => {

        //         if (result.weather && result.weather.length > 0) {
                 
        //             this.setState({
        //                 weather: result.weather
        //             });
        //         }
        //     })
        //     .catch(error => console.error(error));
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
                    {
                        this.state.displayLoader ? <Loader /> : null
                    }
                </div>
            </div>
        );
    }
}