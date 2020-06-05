import React from 'react';

import Messenger from './messenger';
import AuthPage from './auth-reg-page';

const MainBody = () => {
    const isLoggedIn = false;
    return (
      <div className="mainbody">
         { isLoggedIn ? Messenger : AuthPage }
      </div>
    );
  };
  
export default MainBody;