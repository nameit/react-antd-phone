import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Index from './test';
import Invoice from './invoice';
import KeyQuota from './key-quota';
import Rank from './rank';

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
