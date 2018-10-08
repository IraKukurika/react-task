import React, {Component} from 'react';
import {Game} from "../../components/Game";
import {NameForm} from "../../components/NameForm";
import {PauseMenu} from "../../components/Menu/PauseMenu";

const wall = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

export default class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pause: false,
      started: false
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
  }

  pressKey = (e) => {
    const {name, pause} = this.state;
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
        this.setState({...this.state, pause: name ? !pause : false});
        break;
      default:
        break;
    }
  };

  handleStart = (name) => {
    this.setState({...this.state, name: name, started: true});
  };

  onResume = () => {
    this.setState({...this.state, pause: false});
  };

  render() {
    const {pause, started} = this.state;
    return (
      <Game wall={wall}>
        {!started && <NameForm onSubmit={this.handleStart}/>}
        {pause && started && <PauseMenu onResume={this.onResume}/>}
      </Game>
    )
  }
}