import React from 'react'; 

import {Header, Lisk, TodoInput, Counter, Website, CarList, Frame } from './components/index';

//import { Users, Home } from './views';

import { Link, Route, Switch, Redirect} from 'react-router-dom';
import { adminRouter } from './routes';

// app 级别降低， 仅仅是一个页面而已！！
class App extends React.Component {

  state = {
    title:"知识库列表",
    show:true,
    tabelList:[
      {
        id:"a1",
        name:"语文"
      },
      {
        id:"a2",
        name:"数学"
      }
    ],
    article:"<div>danger div </div>"
  }

  setInpuList(newValue){
    this.setState({
      tabelList: this.state.tabelList.concat([{
        id:newValue,
        name:newValue
      }])
    })
  }

  render(){
    return (
      <Frame>
        <div>
          <Counter />
          <Header 
            title={this.state.title} 
            number={11}
          />

          <Lisk />
          <TodoInput setInpuList={this.setInpuList.bind(this)}/>

          {this.state.show ? <div>显示</div> : <div>隐藏</div> }
          {
            this.state.tabelList.map((doto)=>{
              return (
                <div key={doto.id}>
                  
                  {doto.name}
                </div>
              )
            })
          }
          <div dangerouslySetInnerHTML={{__html:this.state.article}}></div>


          <Website ></Website>

          ----------------------------------------------- redux -------------------App


          <CarList />

          <Link to="/home">首页</Link>
          <Link to="/user">用户</Link>

          ------------------------------  switch ------------ 
          <Switch>
            
            {
              adminRouter.map(route =>{
                return (
                  <Route
                    exact={route.exact} 
                    key={route.pathname} 
                    path={route.pathname} 
                    render={ (routerProps) =>{
                      return <route.component {...routerProps} />
                    }}
                  />
                )
                
              })
            }

            <Redirect to={adminRouter[0].pathname} from='/admin' exact />
            <Redirect to="/404" />
          </Switch>
          
        </div>
      </Frame>
    )
  }
}

export default App;
