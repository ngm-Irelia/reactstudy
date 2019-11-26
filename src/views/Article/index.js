import React, { Component } from "react";

import './art.css';

class Article extends Component {

  constructor(props){
    super(props)

    this.state = {
      count:5
    }
    
  }

  
  componentDidMount(){

    const createStore = (state) => {
      let getState = state;
      return {
        getState
      }
    }

    const changeState = (action) => {
      switch(action.type) {
        case 'JIAN': action.n = "aa"
        case "JIA": action.n = "aa"
        default : break
      }
    }

    const dispatch = (action) => {
      changeState(action);
      //renderCount(countState)
    }

  }

  //减
  downCount(){
    this.setState((preState,props)=>{

      return {
        count: preState.count - 1
      }

    })
  }

  //加
  addCount(){
    this.setState((preState,props)=>{

      return {
        count: preState.count + 1
      }

    })
  }

  render (){

    return (
      <div>
        Article 页面 整合redux的各模块
        <div>
          <button className="btn" onClick={this.addCount.bind(this)}>+</button>
          <div id="countDisplay">{this.state.count}</div>
          <button className="btn" onClick={this.downCount.bind(this)}>-</button>
        </div>
      </div>
    )
  }
}

export default Article;