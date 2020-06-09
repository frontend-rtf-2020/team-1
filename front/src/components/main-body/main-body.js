<<<<<<< HEAD
import React from 'react';

import Messenger from './messenger';
import AuthPage from './auth-page';

const MainBody = () => {
  const isLoggedIn = true;
  return (
    <div className="mainbody">
      {isLoggedIn ? <Messenger /> : <AuthPage />}
    </div>
  );
};

=======
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
  
>>>>>>> master
export default MainBody;