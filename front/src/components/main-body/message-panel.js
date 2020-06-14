import React from 'react';
import socket from '../../socket';

import MessageHeader from './message-header';
import MessageContainer from './message-container';
import MessageFooter from './message-footer';
import './messenger.css';

function MessagePanel({ users, messages, userName, roomId, onAddMessage }) {
    // const [messageValue, setMessageValue] = React.useState('');
    // const messagesRef = React.useRef(null);

    // const onSendMessage = () => {
    //     socket.emit('ROOM:NEW_MESSAGE', {
    //         userName,
    //         roomId,
    //         text: messageValue,
    //     });
    //     onAddMessage({ userName, text: messageValue });
    //     setMessageValue('');
    // };

    // React.useEffect(() => {
    //     messagesRef.current.scrollTo(0, 99999);
    // }, [messages]);

    return (
        <div class="message">
            <MessageHeader />
            <MessageContainer />
            <MessageFooter />
        </div>
    );
};

export default MessagePanel;