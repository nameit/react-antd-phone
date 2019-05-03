import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';

import Header from '../components/Header';
import Utils from '../utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {}
    };
  }

  componentDidMount() {
    Utils.getRequest('/users').then((response) => {
      console.log(response.data);
      this.setState({
        options: response.data
      });
    });
  }

  render() {
    return <div>
      <Header
        title="发票管理"
        handleBack={() => console.log('返回')}
        rightContent={[<Icon type='search' key='0' />]}
      />
      <ReactEcharts style={{ height: '200px' }} option={this.state.options} />
    </div>;
  }
}

export default App;
