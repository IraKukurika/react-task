import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import GameList from '../../components/GamesList';
import Spinner from '../../components/LoadingSpinner';
import {bindActionCreators} from "redux";
import {fetchLeaderBoard} from "../../redux/actions/leaderBoardActions";
import LinkBack from './styles';

class LeadersBoard extends Component {
  componentDidMount() {
    this.props.fetchLeaderBoard();
  }

  render() {
    const { isRequestInProgress, leaders, error } = this.props;
    return (
      <div>
        {isRequestInProgress && <Spinner />}
        {error}
        {!error && !isRequestInProgress && (
          <Fragment>
            <LinkBack to="/">&larr; Back to Main Menu</LinkBack>
            <GameList data={leaders} />
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({leaderBoardState}) => {
  const {
    isRequestInProgress,
    leaders,
    error,
  } = leaderBoardState;
  return {
    isRequestInProgress,
    leaders,
    error,
  }
};

const mapDispatchToProps = dispatcher =>
  bindActionCreators(
    { fetchLeaderBoard },
    dispatcher
  );

export default connect(mapStateToProps, mapDispatchToProps)(LeadersBoard);