import React from 'react';

import ContactsPanel from './contacts-panel';
import MessagePanel from './message-panel'
import './messenger.css';

const Messenger = () => {

  return (
    <section class="section">
      <ContactsPanel />
      <MessagePanel />
    </section>
    );
  };
  
export default Messenger;