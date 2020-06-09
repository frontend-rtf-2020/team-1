import React from 'react';

import './app-header.css';

const AppHeader = () => {
    const isLoggedIn = false;
    const Logged = <span>
        <a href="direction" class="logAction">Добро пожаловать!</a>
        <a class="active" href="authpage">Выйти</a>
        </span>
    const NotLogged = <span>
        <a class="active" href="authpage">Войти</a>
        <a class="active" href="authpage">Зарегистрироваться</a>
        </span>
    return (
        <div className="header">
            <img class="messlogo" height="45px" width="45px" src="/images/logo.png"></img>
            <a  href="direction" class="logo">angermess</a>
            <div class="header-right">
                { isLoggedIn ? Logged : NotLogged }
            </div>
        </div>
    );
};

export default AppHeader;