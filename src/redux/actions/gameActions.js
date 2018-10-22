export const actionTypes = {
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  START_GAME: 'START_GAME',
  PAUSE_GAME: 'PAUSE_GAME',
  RESUME_GAME: 'RESUME_GAME',
  RESET_GAME: 'RESET_GAME',

  TIMER_TICK: 'TIMER_TICK',
  FIGURE_MOVE_LEFT: 'FIGURE_MOVE_LEFT',
  FIGURE_MOVE_RIGHT: 'FIGURE_MOVE_RIGHT',
  FIGURE_MOVE_DOWN: 'FIGURE_MOVE_DOWN',
  FIGURE_ROTATE: 'FIGURE_ROTATE',
};

export const setPlayerName = playerName => ({
  type: actionTypes.SET_PLAYER_NAME,
  payload: {
    playerName
  }
});

export const startGame = () => ({
  type: actionTypes.START_GAME
});

export const pauseGame = () => ({
  type: actionTypes.PAUSE_GAME
});

export const resumeGame = () => ({
  type: actionTypes.RESUME_GAME
});

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
});

export const timerTick = () => ({
  type: actionTypes.TIMER_TICK
});

export const figureMoveLeft = () => ({
  type: actionTypes.FIGURE_MOVE_LEFT
});

export const figureMoveRight = () => ({
  type: actionTypes.FIGURE_MOVE_RIGHT
});

export const figureMoveDown = () => ({
  type: actionTypes.FIGURE_MOVE_DOWN
});

export const figureRotate = () => ({
  type: actionTypes.FIGURE_ROTATE
});