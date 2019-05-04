import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Index from './test';
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
          <Route path='/' component={Index}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
