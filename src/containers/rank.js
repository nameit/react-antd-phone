import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import Header from '../components/Header';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header {...this.props} title='查看排名' theme="theme-blue" />
        <div style={{ height: 200 }}>
          <Tabs tabs={tabs}
            initalPage={'t2'}
          >
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff'
            }}>
              Content of first tab
          </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff'
            }}>
              Content of second tab
          </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff'
            }}>
              Content of third tab
          </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
