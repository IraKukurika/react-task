import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';

import gameState from './reducers/gameReducer';
import leaderBoardState from './reducers/leaderBoardReducer';
import loadGamesState from './reducers/loadGameReducer';

const rootReducer = combineReducers({ gameState, leaderBoardState, loadGamesState });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default (process.env.NODE_ENV === 'development'
  ? store
  : createStore(rootReducer, applyMiddleware(thunk)));