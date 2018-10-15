import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlayerName, startGame, pauseGame} from "../../redux/actions/gameActions";
import {Game} from "../../components/Game";
import {NameForm} from "../../components/NameForm";
import {PauseMenu} from "../../components/Menu/PauseMenu";

class GameContainer extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
  }

  componentDidUpdate(prevProps) {
    const { playerName, startGame } = this.props;
    if (!prevProps.playerName && playerName) {
      startGame();
    }
  }

  pressKey = (e) => {
    const {pause, startGame, pauseGame} = this.props;
    switch (e.key) {
      case 'ArrowUp':
        break;
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
      case 'ArrowDown':
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
    const { wall, playerName, pause, startGame} = this.props;
    return (
      <Game wall={wall}>
        {!pause && !playerName && <NameForm name={playerName} onSubmit={this.handleStart}/>}
        {pause && playerName && <PauseMenu onResume={startGame}/>}
      </Game>
    )
  }
}

const mapStateToProps = ({ gameState }) => ({
    ...gameState
});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            setPlayerName,
            startGame,
            pauseGame
        },
        dispatcher
    );

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);