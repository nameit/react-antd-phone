import React, { Component } from 'react';
import { Icon, Tabs } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';

import Header from '../components/Header';
import Utils from '../utils';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options1: {},
      options2: {},
      tb: {
        thead: [],
        tbody: []
      }
    };
  }

  componentDidMount() {
    Utils.getRequest('/fapiao1').then((response) => {
      console.log(response.data);
      this.setState({
        options1: response.data
      });
    });
    Utils.getRequest('/fapiao2').then((response) => {
      console.log(response.data);
      this.setState({
        options2: response.data
      });
    });
    Utils.getRequest('/table').then((response) => {
      console.log(response.data);
      this.setState({
        tb: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header
          title="发票管理"
          handleBack={() => console.log('返回')}
          rightContent={[<Icon type='search' key='0' />]}
        />
        <ReactEcharts style={{ height: '200px' }} option={this.state.options1} />
        <Tabs tabs={tabs}
          initalPage={'t2'}
        >
          <div style={
            {
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff'
            }}
          >
            <table className='table'>
              <thead>
                <tr>{this.state.tb.thead.map((item, i) => <th key={i}>{item}</th>)}</tr>
              </thead>
              <tbody>{this.state.tb.tbody.map((item, i) => <tr key={i}>
                <td>{item.no}</td>
                <td>{item.kind}</td>
                <td>{item.amount}</td>
                <td>{item.yearOnYear}</td>
              </tr>)}</tbody>
            </table>
          </div>
          <div style={
            {
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff'
            }}
          >
            Content of second tab
          </div>
          <div style={
            {
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff'
            }}
          >
            Content of third tab
          </div>
        </Tabs>
        <ReactEcharts style={{ height: '200px' }} option={this.state.options2} />
      </div>
    );
  }
}

export default App;
