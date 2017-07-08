import React, { Component } from 'react';
import getTemp from '../api/getTemp';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        this.props.handleIsToggleLoading();
        const cityName = this.refs.txtCity.value;
        this.refs.txtCity.value = '';
        getTemp(cityName)
            .then(temp => this.props.handleOnReceiveTemp(cityName, temp));
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter city name" ref="txtCity" />
                <br /> <br />
                <button onClick={this.onGetTemp}> Get Temp </button>
            </div>
        );
    }
}
