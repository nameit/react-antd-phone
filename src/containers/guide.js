import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Guide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <ul>
        <li>
          <Link to='/example'>例子</Link>
        </li>
        <li>
          <Link to='/invoice'>发票管理</Link>
        </li>
        <li>
          <Link to='/key-quota'>关键指标</Link>
        </li>
      </ul>
    );
  }
}

export default Guide;
