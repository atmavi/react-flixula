import React, { Component } from "react";
import axios from "axios";

class Carousel extends Component {
  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      this.setState({ movies: res.data.results.slice(0, 5) });
    });
  }

  state = {
    url:
      "https://api.themoviedb.org/3/movie/now_playing?api_key=41fae3359cdfc7dc7c70fd9b79294aa9&language=en-US&page=1",
    movies: [],
    posterbaseUrl: "https://image.tmdb.org/t/p/w500",
  };
  render() {
    const { movies, posterbaseUrl } = this.state;
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide w-25 h-25"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {movies.map((movie, i) => {
            return (
              <li
                key={movie.id}
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className={i === 0 ? "active" : ""}
              ></li>
            );
          })}
        </ol>
        <div className="carousel-inner">
          {movies.map((movie, i) => {
            console.log(movie);
            return (
              <div className="carousel-item active" key={movie.id}>
                <img
                  className="d-block w-100"
                  src={posterbaseUrl + movie.poster_path}
                  alt="First slide"
                ></img>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
