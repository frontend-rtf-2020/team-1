import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import ContactsPanel from './contacts-panel';
import MessagePanel from './message-panel'
import './messenger.css';

export default class Messenger extends Component {

  render() {
    const {user} = this.props;
    return (
      <section className="section">
        {user ? null :  <Redirect to="/authpage" />}
        <ContactsPanel />
        <MessagePanel />
      </section>
    );
  };
}