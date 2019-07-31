/* 统一存放action  作用就是生成了 action！！*/
import { CART_INCREMENT, CART_DECREMENT } from './actionTypes';
import axios from 'axios';

// 其实是个函数 ， 返回 的是一个action
export const increment = (id) => ({
	type: CART_INCREMENT,
	id:id
})

export const decrement = (id) => ({ 
  type: CART_DECREMENT,
	id:id
})

/* const initListAction = (res) => ({ 
  type: INIT_LIST_ACTION,
  value:res.data
})

export const getTodoList = () => {
	return (dispatch)=>{ //combineReducers的作用，不用使用store.dispatch
		axios.get('./headerList.json').then( (res)=>{
			console.log(res);
			const action = initListAction(res);
			dispatch(action);
    }).catch( (res)=>{
			console.log("catch--- ");

			const action = initListAction(["hello", "axios", "ngm"]);
			dispatch(action);
		})
	}
} */