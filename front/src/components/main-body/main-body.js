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

export default MainBody;