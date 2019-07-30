import React from 'react'; 

import {Header, Lisk, TodoInput, Counter, Website, CarList} from './components/index';

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


      </div>
    )
  }
}

export default App;
