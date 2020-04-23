import React, { Component } from "react";
import axios from "axios";

import Movie from "./movie";

class Movies extends Component {
  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      this.setState({ movies: res.data.results });
    });
  }

  state = {
    movies: [],
    url:
      "https://api.themoviedb.org/3/movie/popular?api_key=41fae3359cdfc7dc7c70fd9b79294aa9&language=en-US&page=1",
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="d-flex flex-wrap">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}

export default Movies;
