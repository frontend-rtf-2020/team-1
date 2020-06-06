import React from 'react';

import './messenger.css';

const ContactsPanel = () => {
  return (
    <div class="contacts">
      <div class="contacts_menu">
        <div class="contacts_menu-menu">
          <i class="fa fa-plus-circle fa-lg"></i>
        </div>
        <div class="contacts__menu-search">
          <input type="text" placeholder="Поиск..."></input>
        </div>
      </div>
      <div class="contacts_message">
      </div>
      <ul class="contacts_items">
        <li class="contacts__item">
          <div class="contacts__item-left">
            <div class="contacts__item-avatar">
              <img src="test.png" alt=""></img>
            </div>
            <div class="contacts__item-text">
              <p>Павел</p>
              <span>Добрый день!!!!</span>
            </div>
          </div>
          <div class="contacts__item-time">11:45  | June 11 </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactsPanel;