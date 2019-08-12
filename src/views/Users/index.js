import React from 'react';
import { Button, Badge, Card, Table } from 'antd';
import { getUserList } from '../../services';
class Users extends React.Component {

  handleBtnClick(e){
    this.props.history.push({
      pathname:"/home",
      state:{
        id:"123"
      }
    })
  }

  componentDidMount(){
    getUserList().then(function(response){
      console.log(response)
    })
  }

  render() {
    // ！！ 我们使用 Route component 的时候，是有 props的多个方法的， 
    // ！！ 使用render的时候没有，我们的解决办法在home组件中实现
    console.log(this.props)

    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];


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