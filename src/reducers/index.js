import { combineReducers } from 'redux';
import weatherreducer from './weatherreducer';

const rootReducer = combineReducers({
  weather: weatherreducer
});

export default rootReducer;
