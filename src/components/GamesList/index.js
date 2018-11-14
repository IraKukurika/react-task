import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate, FormattedTime, FormattedRelative } from 'react-intl';

import GameListWrap from './styles';

const ItemContent = ({ data: { playerName, points, time, finished } }) => (
  <Fragment>
    <div className="name">Name: {playerName}</div>
    <div className="result">Result: {points}</div>
    <div className="time">Time: {time}</div>
    <div className="saved-on">
      Saved:
      <div style={{whiteSpace: "nowrap"}}>
        <FormattedDate value={finished} />{' '}
        <FormattedTime value={finished} hour="2-digit" minute="2-digit" second="2-digit" />
        <br/>
        <FormattedRelative value={finished} />
      </div>
    </div>
  </Fragment>
);
const GamesList = ({ data, load }) => (
  <GameListWrap>
    <ul>
      {data.map(({ id, ...rest }) => (
        <li key={id}>
          {load ? (
            <Link to={`/game/${id}`} className="wrapper">
              <ItemContent data={rest} />
            </Link>
          ) : (
            <div className="wrapper">
              <ItemContent data={rest} />
            </div>
          )}
        </li>
      ))}
    </ul>
  </GameListWrap>
);
export default GamesList;