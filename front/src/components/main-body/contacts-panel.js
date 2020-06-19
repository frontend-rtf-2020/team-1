import React, { Component } from 'react';
import axios from 'axios';

import './messenger.css';
import DialogsList from './dialogs-list';
import UsersList from './users-list';

export default class ContactsPanel extends Component {
  state = {
    term: '',
    rosterMode: true,
  }

  onClickPlusCirceButton = (event) => {
    event.preventDefault();
    this.setState(({ rosterMode }) => {
      return { rosterMode: !rosterMode }
    });
  };

  createDialog() {
    return axios
      .post(
        "/api/dialogs"
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("createDialog error", error);
      });
  }

  onTermChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    const { term, rosterMode } = this.state;

    return (
      <div className="contacts" >
        <div className="contacts_menu">
          <div className="contacts_menu-menu">
            <button
              className="fa fa-plus-circle fa-lg"
              onClick={this.onClickPlusCirceButton}
            ></button>
          </div>
          <div className="contacts__menu-search">
            <input
              type="text"
              placeholder="Поиск..."
              value={term}
              onChange={this.onTermChange}></input>
          </div>
        </div>
        <div>
          <ul className="contacts-list">
            {rosterMode ?
              <div>
                <div
                  className="start-dialog-message">
                  {!this.state.dialogs ? <h2>У вас еще нет начатых диалогов. Нажмите &#10010;, чтобы найти пользователя</h2> : null}
                </div>
                <DialogsList term={term} />
              </div> :
              <div>
                <div className="start-dialog-message">
                  {!term ? <h2>Введите имя пользователя в строку поиска</h2> : null}
                </div>
                <UsersList term={term} />
              </div>}
          </ul>
        </div>
      </div>
    );
  }
}
