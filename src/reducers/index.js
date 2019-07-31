//实际项目中 只有一个store 。 但是会有多个 reducer。 我们需要 用 redux提供的方式 合并所有
import { combineReducers }  from 'redux';

//引入所有 的 reducer
import {reducer as carList} from '../components/CarList/store';

//导出 合并后的reducer
export default combineReducers({
  carList
})