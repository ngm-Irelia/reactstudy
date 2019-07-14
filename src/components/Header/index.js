import React from 'react';
import PropTypes from 'prop-types';

function HeaderItem(props){

  return (
    <div>
      {props.hi}
    </div>
  )
}


class Header extends React.Component {
  //类式 这么写就可以
  static propTypes = {
    title:PropTypes.string.isRequired,
    number:PropTypes.number
  }
  render(){
    return (
      <div>
         ------- {this.props.number}  {this.props.title} {this.props.type}------- 
         <HeaderItem  hi="first" />
      </div>
    )
  }
}

export default Header;


/* 函数式 可以这么写 */
/* Header.propTypes = {
  title:PropTypes.string.isRequired,
  number:PropTypes.number
} */