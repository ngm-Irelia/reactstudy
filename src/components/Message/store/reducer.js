import { CART_INCREMENT, CART_DECREMENT } from './actionTypes'

const initState = [
  {
    loading:false,
    name:'ngm',
    content:"添加了用户AAAA",
    time:"2019-08-19 12:12:12"
  },
  {
    loading:false,
    name:'ngm',
    content:"浏览了用户设置页面",
    time:"2019-08-19 12:12:22"
  }
];

export default( (state = initState, action)=>{
  
  if(action.type === CART_INCREMENT){
    const newState = JSON.parse( JSON.stringify(state));
    
    newState.forEach(element => {
      if(element.id === action.id){
        element.number++;
      }
    });
    
    return newState;
  }


  if(action.type === CART_DECREMENT){
    const newState = JSON.parse( JSON.stringify(state));

    newState.forEach(element => {
      if(element.id === action.id){
        element.number--;
      }
    });
    
    return newState;
  }

  // 这里一定要return ，在一开始的时候，返回默认的state
  return state;

})