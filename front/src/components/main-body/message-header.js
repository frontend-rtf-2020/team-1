import React from 'react';

import './messenger.css';

const MessageHeader = () => {

    return (
        <div class="message__header">
            <div class="message__header-info">
                <div class="message__header-avatar">
                    <img src="test.png" alt=""></img>
                </div>
                <div class="message__header-text">
                    <p>Павел</p>
                    <span>В сети</span>
                </div>
            </div>
            <div class="message__header-menu">
                <i class="fa fa-book fa-lg"></i>
                <i class="fa fa-search fa-lg"></i>
            </div>
        </div>
    );
};

export default MessageHeader;