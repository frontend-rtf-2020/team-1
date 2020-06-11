import React, { Component } from 'react';

import './auth-page.css';

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    user: null
};

export default class AuthPage extends Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let emailError = "";
        let passwordError = "";

        if (!this.state.password) {
            passwordError = "Введите пароль";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Неправильный email";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }
        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // axios
            //     .post(
            //         "/api/auth",
            //         {
            //             user: {
            //                 email: email,
            //                 password: password
            //             }
            //         },
            //         { withCredentials: true }
            //     )
            //     .then(response => {
            //         if (response.data.logged_in) {
            //             this.props.handleSuccessfulAuth(response.data);
            //         }
            //     })
            //     .catch(error => {
            //         console.log("login error", error);
            //     });
            this.setState(initialState);
        }
    };

    render() {
        return (
            <div class="limiter">
                <div id="wrapper">
                    <h1>Войти</h1>
                    <form
                        id="form"
                        method="post"
                        // action="/api/auth"
                        onSubmit={this.handleSubmit}
                        autocomplete="off">
                        <input
                            type="text"
                            d="login-email"
                            name="email"
                            placeholder="Введите Email"
                            onChange={this.handleChange} />
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="Введите пароль"
                            onChange={this.handleChange} />
                        <p class="error">
                            {this.state.emailError}
                        </p>
                        <p class="error">
                            {this.state.passwordError}
                        </p>
                        <button type="submit" id="login-button" >&#xf0da;</button>
                        <p>Нет аккаунта?
                        <a href="./regpage"
                                class="switch-button"
                            >   Зарегистрируйся</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}