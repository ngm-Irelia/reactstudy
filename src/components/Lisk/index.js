import React from 'react';

class Lisk extends React.Component{

  constructor(){

    super()

    this.state = {
      isLiked:false
    }

  }

  handleLikedClick = ()=>{
    console.log("aaaa")

    //普通方式
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

  }

  render(){

    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {
            this.state.isLiked ? '取消❤️' : '喜欢🖤'
          }
        </span>
        
      </div>
    )

  }


}


export default Lisk;