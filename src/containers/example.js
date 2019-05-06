import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
// import { changeColor } from '../actions/index';
import Utils from '../utils';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' }
];

class Example extends Component {
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
    this.handleSwitchColor = this.handleSwitchColor.bind(this, 'red');
  }

  handleSwitchColor(color) {
    if (this.props.changeColor) {
      this.props.changeColor(color);
    }
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
    console.log('this.props', this.props.themeColor);
    return (
      <div>
        <Header
          title="发票管理"
          rightContent={<span onClick={() => this.props.history.push('/rank')}>查看排名</span>}
          {...this.props}
          theme={this.props.themeColor}
        />
        <div onClick={this.handleSwitchColor}>change color</div>
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

const mapStateToProps = state => (
  {
    themeColor: state.themeColor
  }
);

// const mapDispatchToProps = dispatch => bindActionCreators({ changeColor }, dispatch);
const mapDispatchToProps = dispatch => (
  {
    changeColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color });
    }
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Example);

Example.propTypes = {
  themeColor: PropTypes.string,
  changeColor: PropTypes.func
};
