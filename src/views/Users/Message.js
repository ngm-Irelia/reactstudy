import React from 'react';
import { Messages } from '../../components';
class Message extends React.Component {


  render() {
    console.log(this.props)
 

    return (
      <div>11
        <Messages />
      </div>
    )
  }

}

export default Message;
export { Message };