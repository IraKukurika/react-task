import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { FormattedMessage, FormattedTime } from 'react-intl';
import AppHeaderWrap from './style';

const AppHeader = ({playerName, points, time, intl}) => {
  const duration = moment.duration(time, 'seconds');

  return (
    <AppHeaderWrap>
      <table>
        <tbody>
        <tr>
          <td>
            <FormattedMessage id="player" defaultMessage="Player" />:
          </td>
          <td>{playerName || ''}</td>
        </tr>
        <tr>
          <td>Result:</td>
          <td>{points}</td>
        </tr>
        <tr>
          <td>Time:</td>
          <td>
            <FormattedTime value={duration} hour="numeric" minute="numeric" second="numeric" timeZone="utc" />
          </td>
        </tr>
        </tbody>
      </table>
    </AppHeaderWrap>
  )
};

const mapStateToProps = ({gameState}) => ({ ...gameState});

export default connect(mapStateToProps)(AppHeader);