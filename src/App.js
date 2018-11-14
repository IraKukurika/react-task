import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import ukLocale from 'react-intl/locale-data/uk';
import GameContainer from './containers/GameContainer';
import AppHeader from './components/AppHeader';
import MainMenu from './components/Menu/MainMenu';
import {Header, AppBody} from './styles';
import LeadersBoard from './containers/LeadersBoard';
import LoadGame from './containers/LoadGameContainer';
import ukMessages from './lang/uk';
import enMessages from './lang/en';

addLocaleData([...enLocale, ...ukLocale]);
const messages = {
  uk: ukMessages,
  en: enMessages,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en',
    }
  }

  changeLang =() => {
    const { locale } = this.state;
    this.setState({ locale: locale === 'uk' ? 'en' : 'uk' });
  };

  render() {
    const { locale } = this.state;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <div className='app'>
            <Header>
              <button onClick={this.changeLang}>Lang</button>
              <AppHeader />
            </Header>
            <AppBody>
              <Switch>
                <Route exact path="/" component={MainMenu} />
                <Route exact path="/game" component={GameContainer} />
                <Route exact path="/game/:id" component={GameContainer} />
                <Route exact path="/leader-board" component={LeadersBoard} />
                <Route exact path="/load" component={LoadGame} />
              </Switch>
            </AppBody>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
