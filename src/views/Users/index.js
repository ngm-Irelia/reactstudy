import React from 'react';
import { Button, Badge, Card, Table, Row, Col } from 'antd';
import { getUserList } from '../../services';

import { connect } from 'react-redux';

const ButtonGroup = Button.Group;

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
          console.log(text)
          console.log(record)

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