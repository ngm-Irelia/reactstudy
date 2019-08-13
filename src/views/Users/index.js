import React from 'react';
import { Button, Badge, Card, Table } from 'antd';
import { getUserList } from '../../services';
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

  editUser = (record) => {
    console.log(record);
    this.props.history.push('/admin/user/edit?id="as"')
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
      </div>
    )
  }

}

export default Users;
export { Users };