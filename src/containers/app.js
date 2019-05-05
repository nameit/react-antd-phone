import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import asyncComponent from '../components/async-component';

import Guide from './guide';

const Rank = asyncComponent(() => import(/* webpackChunkName: 'Rank' */ './rank'));
const KeyQuota = asyncComponent(() => import(/* webpackChunkName: 'KeyQuota' */ './key-quota'));
const Invoice = asyncComponent(() => import(/* webpackChunkName: 'Invoice' */ './invoice'));
const Example = asyncComponent(() => import(/* webpackChunkName: 'Example' */ './example'));

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
          <Route path='/example' component={Example}></Route>
          <Route path='/rank' component={Rank}></Route>
          <Route path='/key-quota' component={KeyQuota}></Route>
          <Route path='/invoice' component={Invoice}></Route>
          <Route path='/' component={Guide}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
