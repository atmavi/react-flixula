import React, { Component } from "react";

class Header extends Component {
  componentDidMount() {
    this.displayNext();
  }
  state = {
    displayed: 0,
    movies: [],
  };

  render() {
    //  const { movies } = this.props;
    let { displayed, movies } = this.state;
    return (
      <header className="header">
        <div className="banner">
          <img
            src={
              console.log(movies)
              // "https://image.tmdb.org/t/p/w500/" + movies[displayed]
            }
            alt=""
            className="banner__img"
          />
        </div>
        <div className="featured"></div>
      </header>
    );
  }

  displayNext = () => {
    const timer = () => {
      this.setState({
        displayed: this.state.displayed + 1,
      });
    };
    setInterval(timer, 5000);
  };

  getMovieDetails = () => {
    console.log(this.state.movies);
  };
}

export default Header;
