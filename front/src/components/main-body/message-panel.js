import React from 'react';

import MessageHeader from './message-header';
import MessageContainer from './message-container';
import MessageFooter from './message-footer';
import './messenger.css';

const MessagePanel = () => {

    return (
        <div class="message">
            <MessageHeader />
            <MessageContainer />
            <MessageFooter />
        </div>
    );
};

export default MessagePanel;