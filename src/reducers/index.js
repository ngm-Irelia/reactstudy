import { combineReducers }  from 'redux';

import {reducer as carList} from '../components/CarList/store';

export default combineReducers({
  carList
})