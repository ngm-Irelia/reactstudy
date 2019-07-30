import React, { Component } from 'react';

import { connect } from 'react-redux';

import { actionCreators } from './store';

class CarList extends Component {
  
  render (){
    
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.carList.map( (item)=>{

              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={this.props.decrement.bind(this,item.id,item.number)}>-</button>
                    {item.number}
                    <button onClick={this.props.increment.bind(this,item.id,item.number)}>+</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    carList:state.carList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (id,cc) => {
      dispatch(actionCreators.increment(id))
    },
    decrement: (id) => dispatch(actionCreators.decrement(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarList)