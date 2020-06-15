import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './app-header.css';

export default class AppHeader extends Component {

    render() {
        const { user, handleLogout } = this.props;
        const greeting = user ? `Добро пожаловать, ${user.username}!` : 'что то не так';

        const Logged = <span>
            <a href="/" class="logAction">{greeting} </a>
            <button
                class="active"
                onClick={handleLogout}
                href="/authpage">Выйти
            </button>
        </span>

        return (
            <div className="header">
                <img class="messlogo" height="45px" width="45px" alt="logo of the messenger" src="/images/logo.png"></img>
                <a href="/" class="logo">angermess</a>
                <div class="header-right">
                    {user ? Logged : null}
                </div>
            </div>
        );
    }
}