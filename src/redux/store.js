import { createStore } from 'redux';

const defaultState = {
    isLoading: false,
    cityName: null,
    temp: null
};

const reducer = (state = defaultState, action) => {
    if (action.type === 'TIM_KIEM') return { isLoading: true, cityName: null, temp: null };
    if (action.type === 'TIM_KIEM_THAT_BAI') return { isLoading: false, cityName: null, temp: null };
    if (action.type === 'TIM_KIEM_THANH_CONG') return { isLoading: false, cityName: action.cityName, temp: action.temp };
    return state;
};

const store = createStore(reducer);
export default store;
