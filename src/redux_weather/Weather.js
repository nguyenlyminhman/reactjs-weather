import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    render() {
        return (
            <div>
                <h3> The Weather Forcast </h3>
                <WeatherMessage />
                <WeatherForm />
            </div>
        );
    }
}
