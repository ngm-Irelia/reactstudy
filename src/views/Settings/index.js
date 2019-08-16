import React, { Component } from "react";
import { Row, Col, Slider } from 'antd';
import './index.css';
import 'antd/dist/antd.css';
let echarts = require('echarts');

class Settings extends Component {

  componentDidMount(){

    let myChart = echarts.init(this.refs.reactChart1);
    myChart.setOption({
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    }); 

    console.log(this.refs); 
    console.log(document)
  }

  render (){

    return (
      <div>
        <Row type="flex" justify="space-around">
          <Col span={4} >
            <div ref='reactChart1' className="setting-col">

            </div>
          </Col>
          <Col span={4} >
            <div ref='reactChart2' className="setting-col">

            </div>
          </Col>
          <Col span={4} >
            <div ref='reactChart3' className="setting-col">

            </div>  
          </Col>
          <Col span={4} >
            <div ref='reactChart4' className="setting-col">

            </div>
          </Col>
        </Row>




      </div>
    )
  }
}

export default Settings;