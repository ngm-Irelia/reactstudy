// 简单模拟 react-loadable
import React, { Component } from 'react';

const Loadable = ({loader, loading:Loading}) => {
  return class LoadableComponent extends Component {

    state = {
      LoadedComponent: null   // 状态可以是组件
    }

    componentDidMount(){
      loader().then( (resp)=>{
        this.setState({
          LoadedComponent:resp.default
        })
      })
    }
    
    render (){

      const { LoadedComponent } = this.state;
      return (
        LoadedComponent 
        ?
        <LoadedComponent />
        :
        <Loading />
      )
    }
  }
}

export default Loadable;