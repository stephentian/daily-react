import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import About from './components/About'
import Topic from './components/Topic'
import Home from './pages/home'
import Info from './components/Info'
import NoMatch from './pages/404'

class IRoute extends Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/main" render={() => {
              return (
                <Main>
                  <Route path="/main/:value" component={Info}></Route>
                </Main>
              )
            }}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default IRoute
