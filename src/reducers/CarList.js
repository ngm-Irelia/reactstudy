import { CART_INCREMENT, CART_DECREMENT } from '../actions/actionTypes'

const initState = [
  {
    id:111,
    name:"苹果",
    price:"111",
    number:222
  },
  {
    id:222,
    name:"香蕉",
    price:"111",
    number:222
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