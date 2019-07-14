//react里面通过ref来获取组件或者dom元素，要使用ref之前必须先调用React的createRef
import React,{createRef} from 'react';

class TodoInput extends React.Component{

  constructor(){

    super()

    this.state = {
      inputValue:""
    }


    //在这 创建 ref
    this.inputDom = createRef()

  }

  componentDidMount(){
  }

  InputChange = (e)=>{
    
    this.setState({
      inputValue: e.currentTarget.value
    })

  }

  keyUpEvent = (e)=>{
    if(e.keyCode === 13){
      this.props.setInpuList(this.state.inputValue);
    }
  }

  handleBtnClick(){ 

    this.props.setInpuList(this.state.inputValue);

    console.log(this.inputDom);
    console.log(this.refs.addbtn)

    this.setState({
      inputValue:''
    }, ()=>{

    })

  }

  render(){
    console.log("render 111");
    return (
      <div>
        <input
          type="text" 
          value={this.state.inputValue}
          onChange={this.InputChange}
          onKeyUp={this.keyUpEvent}
          ref={this.inputDom}
        />
        <button
          onClick={this.handleBtnClick.bind(this)}
          ref="addbtn"
        >添加</button>
        
      </div>
    )

  }


}


export default TodoInput;