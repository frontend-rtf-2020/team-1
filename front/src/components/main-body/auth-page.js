import React from 'react';

import './auth-reg-page';

const AuthPage = () => {
    return (
        <div class="limiter">
            <div id="wrapper">
                <h1>Войти</h1>
                <form id="form" method="post" action="/api/auth" autocomplete="off">
                    <input type="text" id="login-email" name="email" placeholder="Введите Email" />
                    <input type="password" id="login-password" name="password" placeholder="Введите пароль" />
                    <p class="error">ошибка</p>
                    <button type="submit" id="login-button" >&#xf0da;</button>
                    <p>Нет аккаунта? <a href="regpage" class="switch-button" >Зарегистрируйся</a></p>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;