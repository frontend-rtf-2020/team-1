import React, { Component } from 'react';

import './messenger.css';

export default class MessageHeader extends Component {

    render() {
        const {withInterlocutor} = this.props;
        const interlocutor =
            <div
                className="message__header-text">
                <p>Павел</p>
                <span>В сети</span>
            </div>
        const nointerlocutor =
            <h1
                className="message__header-text">Выберите собеседника, чтобы начать диалог
        </h1>
        return (
            <div className="message__header">
                <div className="message__header-info">
                    <div className="message__header-avatar">
                        <img src="test.png" alt=""></img>
                    </div>
                    {withInterlocutor ? interlocutor: nointerlocutor}
                </div>
                <div className="message__header-menu">
                    <i className="fa fa-book fa-lg"></i>
                    <i className="fa fa-search fa-lg"></i>
                </div>
            </div>
        );
    }
}