import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
import {Game} from "../../components/Game";
import {NameForm} from "../../components/NameForm";
import {PauseMenu} from "../../components/Menu/PauseMenu";
import {getWallWithFigure} from "../../helpers/gameHelpers";

class GameContainer extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
  }

  componentDidUpdate(prevProps) {
    const {
      playerName,
      startGame,
      started,
      pause,
      timerTick,
      finished
    } = this.props;
    if (!prevProps.playerName && playerName) {
      startGame();
    }

    if ((prevProps.pause && !pause) || (!prevProps.started && started)) {
      this.gameTimer = setInterval(timerTick, 1000);
    }
    if ((!prevProps.pause && pause) || finished) {
      clearInterval(this.gameTimer);
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

  handleStart = (name) => {
    this.props.setPlayerName(name);
    this.props.startGame();
  };

  render() {
    const {wall, playerName, started, pause, resumeGame} = this.props;
    return (
      <Game wall={wall}>
        {!started && <NameForm name={playerName} onSubmit={this.handleStart}/>}
        {pause && playerName && <PauseMenu onResume={resumeGame} />}
      </Game>
    )
  }
}

const mapStateToProps = ({gameState}) => {
  const {
    wall,
    playerName,
    started,
    pause,
    finished,
    figure,
    figurePosition
  } = gameState;
  return {
    wall: figure ? getWallWithFigure(wall, figure, figurePosition) : wall,
    playerName,
    started,
    pause,
    finished,
    figure,
    figurePosition
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
    },
    dispatcher
  );

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);