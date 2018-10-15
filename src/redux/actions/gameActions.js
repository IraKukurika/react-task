export const actionTypes = {
    SET_PLAYER_NAME: 'SET_PLAYER_NAME',
    START_GAME: 'START_GAME',
    PAUSE_GAME: 'PAUSE_GAME',
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
