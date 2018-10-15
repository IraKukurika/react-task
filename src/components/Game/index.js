import React from 'react';
import PropTypes from 'prop-types';
import {AppGame} from "./styles";

export const Game = ({wall, children}) => {

  let hasChildren = false;
  if (children.length) {
    children.map((child) => {
      return child ? hasChildren = child : null;
    });
  } else if (children) {
    hasChildren = true;
  }

  return (
    <AppGame>
      <div className={`game-field ${hasChildren ? 'blurred' : ''}`}>
        {
          wall.map((arr) =>
            arr.map((x, y) =>
              <div key={`${x}//${y}`} className={`brick ${x ? 'full' : ''}`} />
            )
          )
        }
      </div>
      {
        hasChildren && <div className='overlay'>{children}</div>
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