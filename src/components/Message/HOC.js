import React, { Component } from 'react';

//高阶组件！！！

/**
 * {...this.props} 这个必须加上，这样里面的组件才能拿到对应的数据！！！
 * 
 * @param {*} HocContent 一个组件
 */
const HOC = (HocContent) => {
  return class HOC extends Component {

    render(){
      return (
        <div>
          <HocContent {...this.props}/>
          高阶组件 添加页脚
        </div>
      )
    }
  }
}


export default HOC;