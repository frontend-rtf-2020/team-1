import React from 'react';

import './messenger.css';

const UsersListItem = ({ username, email, createDialog }) => {
  return (
    <li
      className="contacts__item"
      onClick={createDialog}>
      <div className="contacts__item-left">
        <div className="contacts__item-text">
          <p>{username}</p>
          <span>{email}</span>
        </div>
      </div>
    </li>
  );
};

export default UsersListItem
