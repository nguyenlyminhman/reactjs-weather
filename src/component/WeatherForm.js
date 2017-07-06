import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        return (
            <div>
                <br /> <br />
                <input type="text" placeholder="Enter city name" ref="txtCity" />
                <br /> <br />
                <button> Get Temp </button>
            </div>
        );
    }
}