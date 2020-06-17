import React, { Component } from 'react';

import './messenger.css';

const UsersItem = ({ label }) => {
  return (
    <li className="contacts__item">
      <div class="contacts__item-left">
        <div class="contacts__item-text">
          <p>{label}</p>
          <span>Иди d ;опу</span>
        </div>
      </div>
      <div class="contacts__item-time">11:45  | June 11 </div>
    </li>
  );
};

export default class ContactsPanel extends Component {
  state = {
    items: [
      { id: 1, label: 'Боря' },
      { id: 2, label: 'Жора' },
      { id: 3, label: 'Рита' },
      { id: 4, label: 'Боря' }
    ],
    term: ''
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label
        .toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onSearchChange = (search) => {
    this.setState({ search });
  }

  onTermChange = (event) => {
    const { onSearchChange = () => { } } = this.props;
    this.setState({
      term: event.target.value
    });

    onSearchChange(event.target.value);
  };

  render() {
    const { items, term } = this.state;
    const foundedUsers = this.search(items, term);
    const elements = foundedUsers.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} >
          <UsersItem {...itemProps} />
        </li>
      );
    });

    return (
      <div class="contacts" >
        <div class="contacts_menu">
          <div class="contacts_menu-menu">
            <i class="fa fa-plus-circle fa-lg"></i>
          </div>
          <div class="contacts__menu-search">
            <input
              type="text"
              placeholder="Поиск..."
              value={this.state.term}
              onChange={this.onTermChange}></input>
          </div>
        </div>
        <div class="contacts_message">
          <ul className="contacts-list">
            {elements}
          </ul>
        </div>
      </div>
    );
  }
}

