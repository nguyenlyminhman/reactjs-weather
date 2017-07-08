import React, { Component } from 'react';
import { connect } from 'react-redux';
import getTemp from '../api/getTemp';
import * as actionCreator from '../redux/actionReducer';

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    onGetTemp() {
        this.props.timKiem();
        const cityName = this.refs.txtCity.value;
        this.refs.txtCity.value = '';
        getTemp(cityName)
            .then(temp => this.props.timKiemThanhCong(cityName, temp))
            .catch(() => {
                alert('can not find this city name');
                this.props.timKiemThatBai();
            });
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

export default connect(null, actionCreator)(WeatherForm);
