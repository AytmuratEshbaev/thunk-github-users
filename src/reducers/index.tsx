import {combineReducers} from 'redux';
import {datas, dataIsLoading} from './datas';

export default combineReducers({
    data: datas, 
    dataIsLoading
})