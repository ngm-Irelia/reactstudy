import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionCreators from '../../actions/CarList-actionCreators';

import {  List, Avatar, Skeleton } from 'antd';

//高阶组件！！！
import HOC from './HOC';

const mapStateToProps = (state)=>{
  return {
    list:state.logList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (id,cc) => {
      dispatch(actionCreators.increment(id))
    },
    decrement: (id) => dispatch(actionCreators.decrement(id))
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@HOC
class Messages extends Component {

  render (){
    
    return (
      <div>
        

        <List
          className="demo-loadmore-list"
          loading={false}
          itemLayout="horizontal"
          
          dataSource={this.props.list}
          renderItem={item => (
            <List.Item
              actions={[<a key="list-loadmore-edit">edit1</a>, <a key="list-loadmore-more">more</a>]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="#">{item.name}</a>}
                  description={item.content}
                />
                <div>{item.time}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

// 第一个参数，从store把state注入到当前组件的props上。
// 第二个参数，把action生成的方法（reducer里面的方法）注入到当前组件中。。  或者，我们直接使用actionCreators 他会自动dispatch，不用手写
//export default connect(mapStateToProps,mapDispatchToProps)(HOC(Messages))
export default Messages //装饰器模式写函数式组件