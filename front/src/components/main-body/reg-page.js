import React, { Component } from 'react';
import '../main-body/auth-page.css';

const initialState = {
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    repeatpasswordError: "",
};


export default class RegPage extends Component {
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
        let blankFieldsError = "";
        let usernameError = "";
        let emailError = "";
        // let passwordError = "";
        let repeatpasswordError = "";
        if (!this.state.username || !this.state.email || !this.state.password || !this.state.repeatpassword) {
            blankFieldsError = "Все поля должны быть заполнены!";
        }
        if (this.state.username.length < 3 || this.state.username.length > 16) {
            usernameError = "Длина логина от 3 до 16 символов!"
        }

        if (!this.state.email.includes("@")) {
            emailError = "Неправильный email";
        }

        if (this.state.password != this.state.repeatpassword) {
            repeatpasswordError = "Пароли не совпадают";
        }

        if (emailError || repeatpasswordError || blankFieldsError || usernameError) {
            this.setState({ emailError, repeatpasswordError, blankFieldsError, usernameError });
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
            //         "http://localhost:3001/registrations",
            //         {
            //             user: {
            //                 email: email,
            //                 password: password,
            //                 password_confirmation: password_confirmation
            //             }
            //         },
            //         { withCredentials: true }
            //     )
            //     .then(response => {
            //         if (response.data.status === "created") {
            //             this.props.handleSuccessfulAuth(response.data);
            //         }
            //     })
            //     .catch(error => {
            //         console.log("registration error", error);
            //     });
            this.setState(initialState);
        }
    };
    render() {
        return (
            <div class="limiter">
                <div class="container-login">
                    <div id="wrapper">
                        <h1>Создать аккаунт</h1>
                        <form
                            id="form"
                            method="post"
                            // action="/api/reg"
                            autocomplete="off"
                            onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                id="register-username"
                                name="username"
                                placeholder="Введите имя"
                                onChange={this.handleChange} />
                            <input
                                type="text"
                                id="register-email"
                                name="email"
                                placeholder="Введите Email"
                                onChange={this.handleChange} />
                            <input
                                type="password"
                                id="register-password"
                                name="password"
                                placeholder="Введите пароль"
                                onChange={this.handleChange} />
                            <input
                                type="password"
                                id="register-repeatpassword"
                                name="repeatpassword"
                                placeholder="Повторите пароль"
                                onChange={this.handleChange} />
                            <p class="error">
                                {this.state.blankFieldsError}
                            </p>
                            <p class="error">
                                {this.state.emailError}
                            </p>
                            <p class="error">
                                {this.state.usernameError}
                            </p>
                            <p class="error">
                                {this.state.repeatpasswordError}
                            </p>
                            <button type="submit" id="register-button">&#xf0da;</button>
                            <p>Уже есть аккаунт? <a href="./authpage">Войди</a></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}