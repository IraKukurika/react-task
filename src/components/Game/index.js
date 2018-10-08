import React from 'react';
import PropTypes from 'prop-types';
import {AppGame} from "./styles";

export const Game = ({wall, children}) => {
  return (
    <AppGame>
      <div className={`game-field ${children ? 'blurred' : ''}`}>
        {
          wall.map((arr) =>
            arr.map((x, y) =>
              <div key={`${x}//${y}`} className={`brick ${x ? 'full' : ''}`} />
            )
          )
        }
      </div>
      {
        children.map((child, index) => (
          child && <div key={index} className='overlay'>{children}</div>
        ))
      }
    </AppGame>
  )
};

// interfaces
Game.propTypes = {
  wall: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number
    )
  ).isRequired
};

Game.defaultProps = {
  wall: [],
};