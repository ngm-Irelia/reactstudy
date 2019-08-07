import React from 'react'; 

import {Header, Lisk, TodoInput, Counter, Website, CarList} from './components/index';

import { Users, Home } from './views';

import { Route, Link, Redirect, Switch } from 'react-router-dom';


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
    console.log(newValue);
    this.setState({
      tabelList: this.state.tabelList.concat([{
        id:newValue,
        name:newValue
      }])
    })
  }

  render(){
    return (
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

        <Link to="/Home">首页</Link>
        <Link to="/Users">用户</Link>

      <Switch>
        <Route component={Users} path="/Users" exact />  {/* 必须完全匹配 */}
        <Route render={()=>{
          return <Home name="牛贵敏"/>
        }} path="/Home" /> 
         
        <Redirect to="/Home" from="/" /> {/* 重定向，如果前面的都没找到，调找到这个页面 */}
      </Switch>
        
      </div>
    )
  }
}

export default App;
