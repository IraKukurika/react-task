import {actionTypes} from "../actions/gameActions";
import {
  getFigure,
  getInitialFigurePosition,
  getInitialWall,
  getNewPositionDown, getNewPositionLeft, getNewPositionRight, getRotatedFigure,
  getWallWithCleanedLines,
  getWallWithFigure,
  isEnoughFreeSpace
} from "../../helpers/gameHelpers";

const defaultState = {
  wall: getInitialWall(),
  playerName: '',
  started: false,
  pause: false,
  points: 0,
  time: 0,
  finished: false,
  figure: null,
  figurePosition: getInitialFigurePosition(),
};

export default function (state = defaultState, {type = '', payload: {playerName} = {}}) {
  switch (type) {
    case actionTypes.SET_PLAYER_NAME:
      return {
        ...state,
        playerName
      };

    case actionTypes.START_GAME:
      return {
        ...state,
        started: true
      };

    case actionTypes.PAUSE_GAME:
      return {
        ...state,
        pause: true
      };

    case actionTypes.RESUME_GAME:
      return {
        ...state,
        pause: false
      };

    case actionTypes.RESET_GAME:
      return {
        ...defaultState,
      };

    case actionTypes.TIMER_TICK:
      const { wall, figure, figurePosition, time, points } = state;
      let figureData = {};

      if (!figure) {
        // if figure wasn't set yet(means game was just started)
        // initialize figure and position
        figureData = {
          figure: getFigure(),
          figurePosition: getInitialFigurePosition(),
        };
      } else {
        // otherwise try to move figure down
        const newPosition = getNewPositionDown(wall, figure, figurePosition);
        if (newPosition) {
          // if possible move figure down
          figureData = {
            figurePosition: newPosition,
          }
        } else {
          // or finish figure falling and add new figure to start position
          const { wall: cleanedWall, counter } = getWallWithCleanedLines(
            getWallWithFigure(wall, figure, figurePosition),
          );
          const newFigure = getFigure();
          const newFigurePosition = getInitialFigurePosition();

          figureData = {
            figure: newFigure,
            figurePosition: {
              ...newFigurePosition
            },
            points: points + counter*10,
            wall: cleanedWall,
            finished: !isEnoughFreeSpace(cleanedWall, newFigure, newFigurePosition),
          };
        }
      }
      return {
        ...state,
        time: time + 1,
        ...figureData,
      };

    case actionTypes.FIGURE_ROTATE: {
      const { wall, figure, figurePosition } = state;
      const newFigureAndPosition = getRotatedFigure(wall, figure, figurePosition);
      return {
        ...state,
        ...(newFigureAndPosition ? newFigureAndPosition : {}),
      };
    }

    case actionTypes.FIGURE_MOVE_LEFT:
    case actionTypes.FIGURE_MOVE_RIGHT:
    case actionTypes.FIGURE_MOVE_DOWN: {
      const {wall, figure, figurePosition} = state;
      if (figure) {
        const newPosition = () => {
          switch (type) {
            case 'FIGURE_MOVE_LEFT':
              return getNewPositionLeft(wall, figure, figurePosition);
            case 'FIGURE_MOVE_RIGHT':
              return getNewPositionRight(wall, figure, figurePosition);
            case 'FIGURE_MOVE_DOWN':
              return getNewPositionDown(wall, figure, figurePosition);
            default:
              return {};
          }
        };
        // const newPosition = {
        //   [actionTypes.FIGURE_MOVE_LEFT]: getNewPositionLeft,
        //   [actionTypes.FIGURE_MOVE_RIGHT]: getNewPositionRight,
        //   [actionTypes.FIGURE_MOVE_DOWN]: getNewPositionDown,
        // }[type](wall, figure, figurePosition);
        return {
          ...state,
          ...(newPosition() ? {figurePosition: {...newPosition()}} : {}),
        };
      } else {
        return {
          ...state,
        }
      }
    }

    default:
      return state;
  }
};