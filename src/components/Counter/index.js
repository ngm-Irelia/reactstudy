import React,{Component, createContext } from 'react';
import { Button } from 'antd';

//实现 context   Provider  共享数据

const {
  Provider,
  Consumer:CounterConsumer
} = createContext();


/**
 * 封装了一个 Provider, 里面的状态是共享的
 * 定义了一个 provider
 * 存放数据
 */
class CounterProvider extends Component {

  constructor (){
    super()
    this.state = {
      count : 1000
    }
  }

  incrementCount = () =>{
    this.setState({
      count : this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count : this.state.count - 1
    })
  }

  // provider 必须有一个value属性
  render (){
    return (
      <Provider value={{
        count : this.state.count,
        onIncrementCount : this.incrementCount,
        onDecrementCount : this.decrementCount
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

class CounterNum extends Component {

  render (){
    return (
      <CounterConsumer>
        {
          ({count})=>{
            // 这里能给拿到 上面 Provider 的 value里面的值
            return <span>{count}</span>
          }
        }

      </CounterConsumer>
    )
  }

}

/**
 * + - 按钮
 */
class CounterBtn extends Component {
  render(){
    
    return (
      <CounterConsumer>
      {
        (ctx)=>{
         
          let handler = this.props.type === "increment" ? ctx.onIncrementCount : ctx.onDecrementCount;
          return (
            <Button loading onClick={handler}>
              {this.props.children}
            </Button>
          )
        }
      }

    </CounterConsumer>
        
       
    )
  }
}

class Counter extends React.Component {
  
  render(){
    return (
      <CounterProvider>
        <div>
          <div> -------  Counter  ------- </div> 
            <CounterBtn type="decrement">-</CounterBtn>
            <CounterNum>100</CounterNum>
            <CounterBtn type="increment">+</CounterBtn>
        </div>
         
      </CounterProvider>
    )
  }
}

export default Counter;
