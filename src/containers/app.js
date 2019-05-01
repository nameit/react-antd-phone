import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import Echarts from 'echarts';

import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initCharts();
  }

  initCharts() {
    const option = {
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
    Echarts.init(document.getElementById('chart'));
    Echarts.setOption(option);
  }

  render() {
    return <div>
      <Header
        title="发票管理"
        handleBack={() => console.log('返回')}
        rightContent={[<Icon type='search' key='0' />]}
      />
      <div id='chart' style={{ width: '100%', height: '220px' }}></div>
    </div>;
  }
}

export default App;
