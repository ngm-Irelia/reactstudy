#

#普通方式
/* this.setState({
  isLiked: !this.state.isLiked
}) */

/**
  * 两个参数，第一个可以是函数，第二个是回调函数
  * @params prevState 上一次的 state
  * @params props 上一次的 porps
  */
this.setState((prevState,props) => {
  return {
    isLiked: !prevState.isLiked
  }
},()=>{
  //因为setState是异步的，所以，只有在这里 这个回调函数里面，才能拿到最新的state

})

#context 


#高阶组件    函数返回值是一个新的组件

npm install react-app-rewired --save-dev

#对react-app-rewired进行简单的配置
npm install customizr-cra --save-dev 
