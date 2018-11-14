import { actionsTypes } from '../actions/leaderBoardActions';

const defaultState = {
  isRequestInProgress: false,
  leaders: [],
  error: '',
};

export default (state = defaultState, { type = '', payload = {} }) => {
  switch (type) {
    case actionsTypes.LEADER_BOARD_REQUEST_START:
      return {
        ...state,
        isRequestInProgress: true,
      };
    case actionsTypes.FETCH_LEADER_BOARD_SUCCESS:
      return {
        ...state,
        leaders: payload.leaders,
        isRequestInProgress: false,
      };
    case actionsTypes.LEADER_BOARD_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        isRequestInProgress: false,
      };
    case actionsTypes.SAVE_LEADER_BOARD_SUCCESS:
      return {
        ...state,
        requestInProgress: false,
      };
    default:
      return state;
  }
}