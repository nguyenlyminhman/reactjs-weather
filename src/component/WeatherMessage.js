import React, { Component } from 'react';

export default class WeatherMessage extends Component {
    getMessage() {
        const { isLoading, temp, cityName } = this.props;
        if (isLoading) return 'Loading...please wait !!!';
        if (!cityName) return 'Enter city name !!!';
        return `${cityName} is now ${temp}oC`;
    }
    render() {
        return (
            <div>
                <h3> {this.getMessage()}</h3>
            </div>
        );
    }
}
