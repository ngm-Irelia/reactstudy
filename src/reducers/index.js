//实际项目中 只有一个store 。 但是会有多个 reducer。 我们需要 用 redux提供的方式 合并所有
import { combineReducers }  from 'redux';

// !!! 注意了啊，项目页面上需要用到的 reducer ，我们都放在了这一级，  具体组件里面的 reducer。  我们都放在了组件目录下了！！

//引入所有 的 reducer
import { reducer as userReducer } from './userReducer';

import {reducer as carList} from '../components/CarList/store';
import {reducer as logList} from '../components/Message/store';
//导出 合并后的reducer
export default combineReducers({
  carList,logList
})