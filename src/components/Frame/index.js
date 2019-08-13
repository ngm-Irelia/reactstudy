import React from 'react';
import './frame.less';
import "@ant-design/aliyun-theme/index.less";
import { adminRouter } from '../../routes';
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';

 
const { Header, Content, Sider } = Layout;

class Frame extends React.Component {
  constructor(props){
    super();
    this.state = {
      aa:"aaa"
    };

    console.log("constructor")
  }

  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps")
    return true;
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  onMenuClick = ({item, key, keyPath, dimEvent}) =>{
    console.log({item, key, keyPath, dimEvent})
    this.props.history.push({
      pathname:key
    })
  }

  render(){
    console.log("render")
    return (
      <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              selectedKeys={[this.props.location.pathname]}
            >
              
              {
                adminRouter.map((item)=>{
                  if(item.level === 1){
                    return (
                      <Menu.Item 
                        key={item.pathname}
                        onClick={this.onMenuClick}
                      >
                        {item.title}
                      </Menu.Item>
                    )
                  }
                  
                })
              }

              {/* <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu> */}
               
               
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </>
    )
  }
}

export default withRouter(Frame);