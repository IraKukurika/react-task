import React, { Component } from 'react';

import GameContainer from './containers/GameContainer/index';
import AppHeader from './components/AppHeader/index';

import {Header, AppBody} from './styles';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header>
          <AppHeader />
        </Header>
        <AppBody>
          <GameContainer />
        </AppBody>
      </div>
    );
  }
}

export default App;
