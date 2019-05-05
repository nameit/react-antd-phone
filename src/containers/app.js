import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import asyncComponent from '../components/async-component';

import Index from './test';

const Rank = asyncComponent(() => import(/* webpackChunkName: 'Rank' */ './rank'));
const KeyQuota = asyncComponent(() => import(/* webpackChunkName: 'KeyQuota' */ './key-quota'));
const Invoice = asyncComponent(() => import(/* webpackChunkName: 'Invoice' */ './invoice'));

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
      <HashRouter>
        <Switch>
          <Route path='/rank' component={Rank}></Route>
          <Route path='/key-quota' component={KeyQuota}></Route>
          <Route path='/invoice' component={Invoice}></Route>
          <Route path='/' component={Index}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
