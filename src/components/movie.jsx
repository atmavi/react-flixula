import React from "react";

const Movie = (props) => {
  const { poster_path, title, overview } = props.movie;
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={imgBaseUrl + poster_path}
        alt={"poster_" + title}
      ></img>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview.slice(0, 100) + "..."}</p>
        <a href="/test" className="btn btn-primary align-self-center">
          View full Details
        </a>
      </div>
    </div>
  );
};

export default Movie;
