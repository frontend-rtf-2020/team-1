import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import socket from './socket';

import AppHeader from './components/app-header/app-header';
import Messenger from './components/main-body/messenger';
import AuthPage from './components/main-body/auth-page';
import RegPage from './components/main-body/reg-page';

export default class App extends Component {

  state = {
    user: null,
    userChecked: false
  }

  fetchUser = async () => {
    return axios
      .get("/api/currentuser")
      .then(response => {
        this.setState({ user: response.data , userChecked: true });
      })
      .catch(error => {
        console.log("login error", error);
        this.setState({userChecked: true });
      });
  }

  handleLogin = async () => {
    this.setState({ userChecked: false})
    this.fetchUser()
    socket.emit('ROOM:JOIN', {});
  }

  handleLogout = () => {
    axios
      .get(
        "/api/logout"
      )
      .then(() => {
        this.setState({ user: null });
        socket.emit('ROOM:JOIN', {});
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    const { user, userChecked } = this.state;
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
          <AppHeader user={user} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path="/authpage" render={() => <AuthPage handleLogin={this.handleLogin} />} />
            <Route exact path="/regpage" component={RegPage} />
            <Route exact path="/" render={() => userChecked ? <Messenger user={user} /> : null} />
          </Switch>
        </div>
      </Router>
    );
  }
}
