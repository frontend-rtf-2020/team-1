import React, { Component } from 'react';

import AppHeader from './components/app-header/app-header';
import MainBody from './components/main-body/main-body';

class App extends Component {
  render() {
    return (
      <div className="messenger">
        <AppHeader />
        <MainBody />
      </div>
    );
  }
}
export default App;
