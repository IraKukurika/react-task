import {
  getGameList,
  getGameDataById,
  saveGameData,
} from '../../helpers/serverAPIHelpers';

export const actionsTypes = {
  GAME_DATA_REQUEST_START: 'GAME_DATA_REQUEST_START',
  GAME_DATA_REQUEST_ERROR: 'GAME_DATA_REQUEST_ERROR',

  GAME_DATA_FETCH_SUCCESS: 'GAME_DATA_FETCH_SUCCESS',
  GAME_DATA_SAVE_SUCCESS: 'GAME_DATA_SAVE_SUCCESS',

  GAMES_LIST_FETCH_SUCCESS: 'GAME_DATA_LIST_SUCCESS',
};

const requestStart = () => ({
  type: actionsTypes.GAME_DATA_REQUEST_START,
});

const requestError = error => ({
  type: actionsTypes.GAME_DATA_REQUEST_ERROR,
  payload: { error },
});

const fetchGameListSuccess = games => ({
  type: actionsTypes.GAMES_LIST_FETCH_SUCCESS,
  payload: { games },
});

const fetchGameDataSuccess = gameData => ({
  type: actionsTypes.GAME_DATA_FETCH_SUCCESS,
  payload: { gameData },
});

const saveGameDataSuccess = () => ({
  type: actionsTypes.GAME_DATA_SAVE_SUCCESS,
});

export const submitGameData = () =>
  (dispatch, getState) => {
    dispatch(requestStart());
    const {playerName, time, points, wall, figure, figurePosition} = getState().gameState;
    saveGameData({
      playerName,
      time,
      points,
      wall,
      figure,
      figurePosition
    })
      .then(() => dispatch(saveGameDataSuccess()))
      .catch(err => dispatch(requestError(err.message)))
  };

export const fetchGamesList = () =>
  dispatch => {
    dispatch(requestStart());
    getGameList()
      .then((res) => dispatch(fetchGameListSuccess(res.data)))
      .catch(err => dispatch(requestError(err.message)))
  };

export const fetchGameData = id =>
  dispatch => {
    dispatch(requestStart());
    getGameDataById(id)
      .then((res) => dispatch(fetchGameDataSuccess(res.data)))
      .catch(err => dispatch(requestError(err.message)))
  };