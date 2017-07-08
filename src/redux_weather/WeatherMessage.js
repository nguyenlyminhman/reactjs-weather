import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherMessage extends Component {
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

const mapStateToStore = (state) => ({
    isLoading: state.isLoading,
    cityName: state.cityName,
    temp: state.temp
});

export default connect(mapStateToStore)(WeatherMessage);
