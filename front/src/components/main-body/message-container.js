import React from 'react';

import './messenger.css';

const MessageContainer = () => {

    return (
            <div class="message__container">
                <ul class="message__container-items">
                    <li class="message__container-item left">
                        <div class="message__item-text">
                            <p>SoMETIMES...</p>
                        </div>
                        <div class="message__item-time">11:45</div>
                    </li>
                    <li class="message__container-item right">
                        <div class="message__item-text">
                            <p>God TAKES MOMMIES ANd PuPPIES AWAY...</p>
                        </div>
                        <div class="message__item-time">11:45</div>
                    </li>
                    <li class="message__container-item left">
                        <div class="message__item-text">
                            <p>ANd SoMETIMES...</p>
                        </div>
                        <div class="message__item-time">11:45</div>
                    </li>
                    <li class="message__container-item right">
                        <div class="message__item-text">
                            <p>JuST SoMETIMES...I do</p>
                        </div>
                        <div class="message__item-time">11:45</div>
                    </li>
                </ul>
            </div>
    );
};

export default MessageContainer;