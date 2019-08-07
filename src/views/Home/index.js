import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Badge } from 'antd';

import './home.less';

// 高阶组件！！
const testHOC = (WrappedComponent) =>{
  return class HOCComponent extends React.Component {
    render (){
      return (
        <>
          <WrappedComponent />
          <div>这是高阶组件的信息</div>
        </>
      )
    }
  }
}

@testHOC
class Home extends React.Component {

  render() {
    // ！！ 这里，我们使用的是 render 跳转到 Home， 拿不到props的一些方法，需要使用 withRouter 高阶组件
    console.log(this.props)
    return (
      <div>
        home
        <div>
          <Badge count={100} overflowCount={9} showZero>
            <span>message</span>
          </Badge>
        </div>
      </div>
    )
  }

}

// export default withRouter( testHOC(Home) );   // 使用 高阶组件testHOC
export default withRouter( Home );