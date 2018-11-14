import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {
  setPlayerName,
  startGame,
  pauseGame,
  resumeGame,
  resetGame,
  timerTick,
  figureMoveLeft,
  figureMoveRight,
  figureMoveDown,
  figureRotate,
} from "../../redux/actions/gameActions";
import { saveLeaderBoard } from '../../redux/actions/leaderBoardActions';
import { submitGameData, fetchGameData } from '../../redux/actions/loadGameActions';
import {Game} from "../../components/Game";
import {NameForm} from "../../components/NameForm";
import {PauseMenu} from "../../components/Menu/PauseMenu";
import {getWallWithFigure} from "../../helpers/gameHelpers";
import FinishMenu from "../../components/Menu/FinishMenu";
import LoadingSpinner from '../../components/LoadingSpinner';

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.playerName,
      idToLoad: props.match.params.id,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
    const { idToLoad } = this.state;
    if (idToLoad) {
      this.props.fetchGameData(idToLoad);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
    const { resetGame } = this.props;
    clearInterval(this.gameTimer);
    resetGame();
  }

  componentDidUpdate(prevProps) {
    const {
      playerName,
      startGame,
      pause,
      timerTick,
      finished,
      saveLeaderBoard,
    } = this.props;
    if (!prevProps.playerName && playerName) {
      !this.state.idToLoad && startGame();
    }

    if ((prevProps.pause && !pause)) {
      this.gameTimer = setInterval(timerTick, 1000);
    }
    if ((!prevProps.pause && pause) || finished) {
      clearInterval(this.gameTimer);
    }

    if (!prevProps.finished && finished) {
      saveLeaderBoard();
    }
  }

  pressKey = (e) => {
    const {
      pause,
      startGame,
      pauseGame,
      figureMoveLeft,
      figureMoveRight,
      figureMoveDown,
      figureRotate,
    } = this.props;
    switch (e.key) {
      case 'ArrowUp':
        figureRotate();
        break;
      case 'ArrowLeft':
        figureMoveLeft();
        break;
      case 'ArrowRight':
        figureMoveRight();
        break;
      case 'ArrowDown':
        figureMoveDown();
        break;
      case 'Escape':
        pause ? startGame() : pauseGame();
        break;
      default:
        break;
    }
  };

  onSetPlayerName = name => {
    this.props.setPlayerName(name);
  };

  onSaveGame = () => {
    this.props.submitGameData();
    this.props.history.push('/');
  };

  render() {
    const {
      wall,
      playerName,
      finished,
      pause,
      resumeGame,
      requestInProgress,
    } = this.props;
    const { idToLoad } = this.state;
    return (
      <Game wall={wall}>
        {requestInProgress && <LoadingSpinner/>}
        {!idToLoad &&
        pause &&
        !playerName && (
          <NameForm name={playerName} onSubmit={this.onSetPlayerName}/>
        )}
        {pause && playerName && <PauseMenu onResume={resumeGame} onSave={this.onSaveGame}/>}
        {finished && <FinishMenu/>}
      </Game>
    )
  }
}

const mapStateToProps = ({gameState, leaderBoardState, loadGamesState}) => {
  const { wall, figure, figurePosition } = gameState;
  const {
    leaderBoardInProgress,
    leaderBoardError,
  } = leaderBoardState;
  const {
    loadGameInProgress,
    loadGameError,
  } = loadGamesState;
  return {
    ...gameState,
    ...(figure ? { wall: getWallWithFigure(wall, figure, figurePosition) } : {}),
    requestInProgress: leaderBoardInProgress || loadGameInProgress,
    error: leaderBoardError || loadGameError,
  };
};
const mapDispatchToProps = dispatcher =>
  bindActionCreators(
    {
      setPlayerName,
      startGame,
      pauseGame,
      resumeGame,
      resetGame,
      timerTick,
      figureMoveLeft,
      figureMoveRight,
      figureMoveDown,
      figureRotate,
      saveLeaderBoard,
      submitGameData,
      fetchGameData,
    },
    dispatcher
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GameContainer));