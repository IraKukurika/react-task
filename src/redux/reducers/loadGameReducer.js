import { actionsTypes } from '../actions/loadGameActions';

const defaultState = {
  isRequestInProgress: false,
  games: [],
  error: '',
};

export default (state = defaultState, { type = '', payload = {} }) => {
  switch (type) {
    case actionsTypes.GAME_DATA_REQUEST_START:
      return {
        ...state,
        isRequestInProgress: true,
      };
    case actionsTypes.GAME_DATA_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        isRequestInProgress: false,
      };
    case actionsTypes.GAMES_LIST_FETCH_SUCCESS:
      return {
        ...state,
        games: payload.games,
        isRequestInProgress: false,
      };
    case actionsTypes.GAME_DATA_FETCH_SUCCESS:
      return {
        ...state,
        requestInProgress: false,
      };

    case actionsTypes.GAME_DATA_SAVE_SUCCESS:
      return {
        ...state,
        requestInProgress: false,
      };

    default:
      return state;
  }
}