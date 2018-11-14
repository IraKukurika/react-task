import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../components/LoadingSpinner';
import {bindActionCreators} from "redux";
import {fetchGamesList} from '../../redux/actions/loadGameActions';
import GameList from '../../components/GamesList';
import LinkBack from '../LeadersBoard/styles';

class LoadGame extends Component {

  componentDidMount() {
    this.props.fetchGamesList();
  }

  render() {
    const { isRequestInProgress, games, error } = this.props;
    return (
      <div>
        {isRequestInProgress && <Spinner />}
        {error}
        {!error && !isRequestInProgress && (
          <Fragment>
            <LinkBack to="/">&larr; Back to Main Menu</LinkBack>
            <GameList data={games} load />
          </Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({loadGamesState}) => {
  const {
    isRequestInProgress,
    games,
    error,
  } = loadGamesState;
  return {
    isRequestInProgress,
    games,
    error,
  }
};
const mapDispatchToProps = dispatcher =>
  bindActionCreators(
    { fetchGamesList },
    dispatcher
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoadGame);