import React, { Component } from 'react';

import AuthPage from '../main-body/auth-page';
import './app-header.css';

export default class AppHeader extends Component {
    render() {
        const { isLoggedIn } = this.props;
        const Logged = <span>
            <a href="/" class="logAction">Добро пожаловать!</a>
            <a
                class="active"
                href="/authpage">Выйти
            </a>
        </span>
        return (
            <div className="header">
                <img class="messlogo" height="45px" width="45px" src="/images/logo.png"></img>
                <a href="direction" class="logo">angermess</a>
                <div class="header-right">
                    {isLoggedIn ? Logged : null}
                </div>
            </div>
        );
    }
}