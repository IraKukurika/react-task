import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getLeaderBoard = () => api.get('/leaderboard');
export const saveGameResult = gameResult => api.post('/leaderboard', gameResult);

export const getGameList = () => api.get('/games');
export const getGameDataById = id => api.get(`/game?id=${id}`);
export const saveGameData = gameData => api.post('/game', gameData);