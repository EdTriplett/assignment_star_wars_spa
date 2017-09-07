import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Films.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Film from '../../components/Film';

class Films extends Component {
  componentDidMount() {
    const { filmReducer, actions } = this.props;
    if (!filmReducer.films.length) {
      actions.getInitialFilms();
    }
  }

  render() {
    const { isFetching, films } = this.props.filmReducer;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Films from Star Wars API</h2>
        </div>
        <Link to="/">Home</Link>

        {isFetching
          ? <p>Fetching films...</p>
          : films.map(film =>
              <Link
                to={{
                  pathname: `/films/${film.episode_id}`,
                  state: {
                    title: film.title,
                    description: film.opening_crawl,
                    director: film.director,
                    releaseDate: film.release_date
                  }
                }}
                key={film.episode_id}
                title={film.title}
              >
                {' '}{film.title}{' '}
              </Link>
            )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.filmActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Films);
