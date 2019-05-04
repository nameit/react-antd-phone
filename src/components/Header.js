import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    if (this.props.handleBack) {
      this.props.handleBack();
    } else {
      this.props.history.goBack();
    }
  }

  render() {
    return <NavBar
      className={this.props.theme || 'default'}
      icon={<Icon type="left" />}
      onLeftClick={this.handleBack}
      rightContent={this.props.rightContent}
    >{this.props.title}</NavBar>;
  }
}

export default Header;
