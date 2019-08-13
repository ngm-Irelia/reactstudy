import React from 'react';
import { Button, Badge, Card, Table } from 'antd';
import { getUserList } from '../../services';
class Users extends React.Component {

  constructor(){
    super();
    this.state = {
      dataSource:[],
      columns: [
        {
          title: '姓名',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'password',
          dataIndex: 'password',
          key: 'password',
        },
      ]
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

  componentDidMount(){
    let _that = this;
    getUserList().then(function(response){
      let dataSource = response.data.users;
      _that.setState({
        dataSource:dataSource
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
        <Card title="用户列表" extra={<a href="#">导出excel</a>} >
          <Table dataSource={dataSource} columns={columns} />
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