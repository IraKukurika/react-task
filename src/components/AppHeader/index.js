import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import AppHeaderWrap from './style';

const addLeadingZero = (n = '') => {
  const str = `${n}`;
  switch (str.length) {
    case 0:
      return '00';
    case 1:
      return `0${n}`;
    default:
      return `${n}`;
  }
};

const AppHeader = ({playerName, points, time}) => {
  const duration = moment.duration(time, 'seconds');

  return (
    <AppHeaderWrap>
      <table>
        <tbody>
        <tr>
          <td>Player:</td>
          <td>{playerName || ''}</td>
        </tr>
        <tr>
          <td>Result:</td>
          <td>{points}</td>
        </tr>
        <tr>
          <td>Time:</td>
          <td>
            {Math.floor(duration.asHours())}:{addLeadingZero(duration.minutes())}:{addLeadingZero(duration.seconds())}
          </td>
        </tr>
        </tbody>
      </table>
    </AppHeaderWrap>
  )
};

const mapStateToProps = ({gameState}) => ({ ...gameState});

export default connect(mapStateToProps)(AppHeader);