import React, { Component } from 'react';
import axios from 'axios';

import './messenger.css';

export default class UsersListItem extends Component {
  createDialog({username, email}) {
    axios.post(`/api/dialogs`)
      .then(response => {
        console.log('успех')
      })
      .catch(error => {
        console.log("creation error", error);
      });
    }

  render() {
    const { username, email, createDialog } = this.props;
    return (
      <div
        className="contacts__item"
        onClick={this.createDialog}>
        <div className="contacts__item-left">
          <div className="contacts__item-text">
            <p>{username}</p>
            <span>{email}</span>
          </div>
        </div>
      </div>
    );
  }
};
