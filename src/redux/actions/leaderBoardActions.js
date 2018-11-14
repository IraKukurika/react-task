import {
  getLeaderBoard,
  saveGameResult,
} from '../../helpers/serverAPIHelpers';

export const actionsTypes = {
  LEADER_BOARD_REQUEST_START: 'LEADER_BOARD_REQUEST_START',
  LEADER_BOARD_REQUEST_ERROR: 'LEADER_BOARD_REQUEST_ERROR',

  FETCH_LEADER_BOARD_SUCCESS: 'FETCH_LEADER_BOARD_SUCCESS',
  SAVE_LEADER_BOARD_SUCCESS: 'SAVE_LEADER_BOARD_SUCCESS',
};

const requestStart = () => ({
  type: actionsTypes.LEADER_BOARD_REQUEST_START,
});

const requestError = error => ({
  type: actionsTypes.LEADER_BOARD_REQUEST_ERROR,
  payload: { error },
});

const fetchSuccess = leaders => ({
  type: actionsTypes.FETCH_LEADER_BOARD_SUCCESS,
  payload: { leaders },
});

const saveSuccess = () => ({
  type: actionsTypes.SAVE_LEADER_BOARD_SUCCESS,
});

export const fetchLeaderBoard = () =>
  dispatch => {
    dispatch(requestStart());
    getLeaderBoard()
      .then(res => dispatch(fetchSuccess(res.data)))
      .catch(err => dispatch(requestError(err.message)))
};

export const saveLeaderBoard = () =>
  (dispatch, getState) => {
    dispatch(requestStart());
    const {
      gameState: { playerName, time, points }
    } = getState();
    saveGameResult({ playerName, time, points })
      .then(() => dispatch(saveSuccess()))
      .catch(err => dispatch(requestError(err.message)))
  };