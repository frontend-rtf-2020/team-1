import React from 'react';

import './messenger.css';

const MessageFooter = () => {

    return (
        <div class="message__footer">
            <div class="message__footer-menu">
                <i class="fa fa-gift fa-lg"> </i>
                <i class="fa fa-camera fa-lg"></i>
                <i class="fa fa-microphone fa-lg"></i>
                <i class="fa fa-smile-o fa-lg"></i>
            </div>
            <div class="message__footer-message">
                <input type="text" placeholder="Написать сообщение..."></input>
                <i class="fa fa-paper-plane fa-lg"></i>   
            </div>
        </div>
    );
};

export default MessageFooter;