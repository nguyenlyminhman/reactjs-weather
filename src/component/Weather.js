import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            cityName: null,
            temp: null
        };
        this.onReceiveTemp = this.onReceiveTemp.bind(this);
        this.toggleIsLoading = this.toggleIsLoading.bind(this);
    }

    onReceiveTemp(cityName, temp) {
        this.setState({ cityName, temp, isLoading: false });
    }

    toggleIsLoading() {
        this.setState(prevState => ({ isLoading: !prevState.isLoading }));
    }

    render() {
        const { isLoading, cityName, temp } = this.state;
        return (
            <div>
                <WeatherMessage
                    isLoading={isLoading}
                    cityName={cityName}
                    temp={temp}
                />
                <WeatherForm
                    handleOnReceiveTemp={this.onReceiveTemp}
                    handleIsToggleLoading={this.toggleIsLoading}
                />
            </div>
        );
    }
}
