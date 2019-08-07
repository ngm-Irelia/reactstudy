import React from 'react';
import { Button, Badge } from 'antd';

class Users extends React.Component {

  handleBtnClick(e){
    this.props.history.push({
      pathname:"/Home",
      state:{
        id:"123"
      }
    })
  }

  render() {
    // ！！ 我们使用 Route component 的时候，是有 props的多个方法的， 
    // ！！ 使用render的时候没有，我们的解决办法在home组件中实现
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleBtnClick.bind(this)}>返回首页</button>
        <Badge count={100} overflowCount={9} showZero>
          <span>message</span>
        </Badge>
      </div>
    )
  }

}

export default Users;
export { Users };