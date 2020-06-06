import React from 'react';

import AppHeader from './components/app-header/app-header';
import MainBody from './components/main-body/main-body';

const App = () => {
    return (
      <div className="messenger">
        <AppHeader/>
        <MainBody/>
      </div>
    );
  };
  
export default App;
