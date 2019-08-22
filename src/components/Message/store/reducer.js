import { ADD_LOG } from './actionTypes'

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
  
  if(action.type === ADD_LOG){
    console.log(" in  add-log action ");
    console.log(action)
    const newState = JSON.parse( JSON.stringify(state));
    
    
    newState.push({
      loading:false,
      name:action.name,
      content:action.msg,
      time:action.time
    })
    
    return newState;
  }


  // 这里一定要return ，在一开始的时候，返回默认的state
  return state;

})