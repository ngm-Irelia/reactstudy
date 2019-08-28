import React, { useState, useEffect  } from 'react';
import { Button, Badge, Card, Table, Row, Col } from 'antd';
import { getUserList } from '../../services';

import { connect } from 'react-redux';

const ButtonGroup = Button.Group;

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  function delAge(){
    setAge(age - 1);
  }

  /**
   *  React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。
      effect 等同于 componentDidMount 和 componentDidUpdate
      可以return一个函数， 等同于 componentWillUnmount

      Hook 其中一个目的就是要解决 class 中生命周期函数经常包含不相关的逻辑，
      但又把相关逻辑分离到了几个不同方法中的问题。

      在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。
      在 class 组件中，我们可以通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决：
   

      通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
      
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]); // 仅在 count 更改时更新
      */

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`);

    // Specify how to clean up after this effect:
    return function cleanup() {
      //在这可以进行操作
    };

  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>You clicked {age} times</p>
      <button onClick={delAge}>
        Click me - 
      </button>
    </div>
  );
}

class Users extends React.Component {

  constructor(){
    super();
    this.state = {
      dataSource:[],
      columns: []
    }
  }

  handleBtnClick(e){
    this.props.history.push({
      pathname:"/home",
      state:{
        id:"123"
      }
    })
  }

  toExcel = () => {
    // 导出excel
    //前端可以使用 js-xlsx
  }

  deleteUser = (record) => {
    console.log(record)
  }

  logUser = (record) => {
    this.props.history.push('/admin/user/log?id="as"')
  }

  editUser = (record) => {
    this.props.addLog(record.id,"用户ngm", (new Date()).toLocaleString(),"编辑了 "+record.username);
    //this.props.history.push('/admin/user/edit?id="as"')
  }

  componentDidMount(){
    let _that = this;
    getUserList().then(function(response){
      let dataSource = response.data.users;  // 数据
      //数据显示
      let columnsList = [];
      if(!dataSource || dataSource.length < 1){ return ''; }
      let columnKeys = Object.keys(dataSource[0]);
      columnKeys.map((item)=>{
        console.log(item)
        columnsList.push({
          title: item,
          dataIndex: item,
          key: item,
        })
      })
      
      columnsList.push({
        title: "操作",
        dataIndex: "doing",
        key: 'doing',
        render:function(text, record){
          return (
            <ButtonGroup>
              <Button onClick={_that.logUser.bind(this,record)}>日志</Button>
              <Button onClick={_that.editUser.bind(this,record)}>编辑</Button>
              <Button onClick={_that.deleteUser.bind(this,record)}>删除</Button>
            </ButtonGroup>
          )
        }
      })

      _that.setState({
        dataSource:dataSource,
        columns:columnsList
      })
    })
  }

  render() {
    // ！！ 我们使用 Route component 的时候，是有 props的多个方法的， 
    // ！！ 使用render的时候没有，我们的解决办法在home组件中实现
    console.log(this.props)

    const {dataSource, columns} = this.state;

    return (
      <div>
        <Card title="用户列表" extra={<a onClick={this.toExcel}>导出excel</a>} >
          <Table rowKey={record => record.id } dataSource={dataSource} columns={columns} />
        </Card>

        
        <Button onClick={this.handleBtnClick.bind(this)}>返回首页</Button>
        <Badge count={100} overflowCount={9} showZero>
          <span>message</span>
        </Badge>
        <Row type="flex" justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <Example />
      </div>
    )
  }

}

const mapStateToProps = (state)=>{
  return {
    list:state.logList
  }
}

const mapDispatchToProps = dispatch => {

  return {
    addLog: (id, name, time, msg) => {
      dispatch({ 
        type: "ADD_LOG",
        id,
        name,
        time,
        msg
      })
    }
  }
}

//把当前组件的用户操作，作为日志保存起来， 可以在日志页面查看。

// 第一个参数，从store把state注入到当前组件的props上。
// 第二个参数，把action生成的方法（reducer里面的方法）注入到当前组件中。。  或者，我们直接使用actionCreators 他会自动dispatch，不用手写
export default connect(mapStateToProps,mapDispatchToProps)(Users)