import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOption() {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
  }

  render() {
    return <div>
      <Header
        title="发票管理"
        handleBack={() => console.log('返回')}
        rightContent={[<Icon type='search' key='0' />]}
      />
      <ReactEcharts style={{ height: '200px' }} option={this.getOption()} />
    </div>;
  }
}

export default App;