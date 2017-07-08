import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Weather from './redux_weather/Weather';

ReactDOM.render(
    <Provider store={store}>
        <Weather />
    </Provider >,
    document.getElementById('root')
);
