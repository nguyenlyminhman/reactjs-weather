import React, { Component } from 'react';

export default class WeatherForm extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter city name" ref="txtCity" />
                <br /> <br />
                <button> Get Temp </button>
            </div>
        );
    }
}
