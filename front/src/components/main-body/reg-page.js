import React from 'react';
import './auth-reg-page';

const RegPage = () => {
    return (
        <div class="limiter">
            <div class="container-login">
                <div id="wrapper">
                    <h1>Создать аккаунт</h1>
                    <form id="form" method="post" action="/api/reg" autocomplete="off">
                        <input type="text" id="register-username" name="username" placeholder="Введите имя" />
                        <input type="text" id="register-email" name="email" placeholder="Введите Email" />
                        <input type="password" id="register-password" name="password" placeholder="Введите пароль" />
                        <input type="password" id="register-repeatpassword" name="repeatpassword" placeholder="Повторите пароль" />
                        <button type="submit" id="register-button">&#xf0da;</button>
                        <p class="error">ошибка</p>
                        <p>Уже есть аккаунт? <a href="authpage">Войди</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegPage;