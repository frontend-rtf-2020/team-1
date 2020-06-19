import React, { Component } from 'react';

import MessageHeader from './message-header';
import MessageFooter from './message-footer';
import './messenger.css';

const MessageItemRecieve = ({ label }) => {
    return (
        <li className="message__container-item left ">
            <div className="message__item">
            </div>
            <div className="message__item-text">
                <p>{label}</p>
            </div>
            <div className="message__item-time">11:45</div>
        </li>
    );
};

// const MessageItemSend = ({ label }) => {
//     return (
//         <li class="message__container-item left">
//             <div className="message__item">
//                 Боря:
//             </div>
//             <div className="message__item-text">
//                 <p>{label}</p>
//             </div>
//             <div className="message__item-time">11:45</div>
//         </li>
//     );
// };

export default class MessagePanel extends Component {
    maxId = 100;
    state = {
        messagesToUser: [
            { id: 1, label: 'SoMETIMES...' },
            { id: 2, label: 'God TAKES MOMMIES ANd PuPPIES AWAY...' },
            { id: 3, label: 'ANd SoMETIMES..' },
            { id: 4, label: 'JuST SoMETIMES...I do' }
        ],
        messagesFromUser: [
            { id: 1, label: 'SoMETIMES...' },
            { id: 2, label: 'God TAKES MOMMIES ANd PuPPIES AWAY...' },
            { id: 3, label: 'ANd SoMETIMES..' },
            { id: 4, label: 'JuST SoMETIMES...I do' }
        ],
        withInterlocutor: false
    }

    onMessageAdded = (label) => {
        this.setState((state) => {
            const item = this.addMessage(label);
            return { messagesToUser: [...state.messagesToUser, item] };
        })
    };

    addMessage(label) {
        return {
            id: ++this.maxId,
            label
        };
    }

    render() {
        const { messagesToUser, withInterlocutor } = this.state;
        const messagesToUserList = messagesToUser.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id} >
                    <MessageItemRecieve {...itemProps} />
                </li>
            );
        });
        return (
            <div className="message">
                <MessageHeader withInterlocutor={withInterlocutor} />
                <section className="message__container" id="style-1">
                    <ul className="message__container-items">
                        {withInterlocutor? messagesToUserList: null}
                    </ul>
                </section>
                <MessageFooter
                    onMessageAdded={this.onMessageAdded}
                    withInterlocutor={withInterlocutor} />
            </div>
        );
    }
};