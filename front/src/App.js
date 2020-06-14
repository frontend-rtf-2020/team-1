import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import socket from './socket';

import reducer from './reducer';
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
    // const [state, dispatch] = React.useReducer(reducer, {
    //   joined: false,
    //   roomId: null,
    //   userName: null,
    //   users: [],
    //   messages: [],
    // });
  
    // const onLogin = async (obj) => {
    //   dispatch({
    //     type: 'JOINED',
    //     payload: obj,
    //   });
    //   socket.emit('ROOM:JOIN', obj);
    //   const { data } = await axios.get(`/rooms/${obj.roomId}`);
    //   dispatch({
    //     type: 'SET_DATA',
    //     payload: data,
    //   });
    // };
  
    // const setUsers = (users) => {
    //   dispatch({
    //     type: 'SET_USERS',
    //     payload: users,
    //   });
    // };
  
    // const addMessage = (message) => {
    //   dispatch({
    //     type: 'NEW_MESSAGE',
    //     payload: message,
    //   });
    // };
  
    // React.useEffect(() => {
    //   socket.on('ROOM:SET_USERS', setUsers);
    //   socket.on('ROOM:NEW_MESSAGE', addMessage);
    // }, []);
  
    // window.socket = socket;

    return (
      <Router>
        <div className="messenger">
          <AppHeader isLoggedIn={isLoggedIn} />
          <div className="mainbody">
            {isLoggedIn ?
              <Redirect to="/" />
              :  <Redirect to="/regpage" />}
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
