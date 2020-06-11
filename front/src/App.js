import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './components/app-header/app-header';
import Messenger from './components/main-body/messenger';
import AuthPage from './components/main-body/auth-page';
import RegPage from './components/main-body/reg-page';

export default class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <div className="messenger">
          <AppHeader isLoggedIn={isLoggedIn} />
          <div className="mainbody">
            {isLoggedIn ?
              <Redirect to="/" />
              :  <Redirect to="/authpage" />}
          </div>
          <Switch>
            <Route exact path="/authpage" component={AuthPage} />
            <Route exact path="/regpage" component={RegPage} />
            <Route exact path="/" component={Messenger} />
          </Switch>
        </div>
      </Router>
    );
  }
}
