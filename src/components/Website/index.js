import React,{Component, createContext } from 'react';


const MyContext = createContext();
const { Provider,Consumer } = MyContext;

class WebsiteProvider extends Component {
  constructor (){
    super()
    this.state = {
      bar : "money",
      table:{
        money:['人民币','日元','欧元','美元'],
        fruit:['火龙果','西瓜','香蕉','橘子'],
        phone:['诺基亚','小米','华为','苹果']
      },
      setBar:(value) =>{
        this.setState({
          bar : value
        })

        console.log("setBar === "+value)
      }
    }
  }

  render (){
    return (
      <Provider value={{ state : this.state }}>
        {this.props.children}
      </Provider>
    )
  }

}


//导航标签  使用 Bar.contextType = MyContext; 方式， 暂留， 我们使用 第二种方式
/* class Bar extends Component {
  constructor (){
    super()
    
    Bar.contextType = MyContext;
  }

  render (){
    let value = this.context;
    
    console.log(value);

    
    return (
      <div>
        导航标签 
        {value.state.bar}
        
      </div>
      
    )
  }

} */

class Bar extends Component {
  constructor (){
    super()
  }

  render (){
    
    return (
      <Consumer>
        {
          context => {
            return (
              <div>
                使用的context 点击后面导航标签： 
                <span onClick={context.state.setBar.bind(this,"money")}>money</span>
                <span onClick={context.state.setBar.bind(this,"fruit")}>fruit</span>
                <span onClick={context.state.setBar.bind(this,"phone")}>phone</span>
              </div>
            )
          }
        }
      </Consumer>
      
      
    )
  }

}

//对应表格
class Table extends Component {
  constructor (){
    super()
  }

  render (){
    return (
      <Consumer>
        {
          value => {
            console.log("table 变化")
            return (
              value.state.table[value.state.bar].map((item,index)=>{
                return <div key={index}>
                  {item}
                </div>
              })
              
            )
          }
        }
      </Consumer>
    )
  }

}

class Website extends Component{

  constructor(){

    super()

    this.state = {
      isLiked:false,
      readme:[
        "该组件 学习使用context",
        " Website下的所有组件都可以获取的其定义的context里面的内容"
      ]
    }

  }
 

  render(){

    return (
      <WebsiteProvider>
        
        <Bar ></Bar>
        <Table ></Table>
        
      </WebsiteProvider>
    )

  }


}


export default Website;