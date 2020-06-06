import React from 'react';

import './app-header.css';

const AppHeader = () => {
    return (
        <div className="header">
            <img class="messlogo" height="45px" width="45px" src="/images/logo.png"></img>
            <a  href="direction" class="logo">angermess</a>
            <div class="header-right">
                <a href="direction" class="logAction">Добро пожаловать!</a>
                <a class="active" href="authpage">Выйти</a>
                <a href="direction" class="logAction">Добро пожаловать!</a>
            </div>
        </div>
    );
};

export default AppHeader;