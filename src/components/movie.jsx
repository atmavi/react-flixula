import React from "react";

const Movie = (props) => {
  console.log(props);
  const { poster_path, title, overview } = props.movie;
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card w-25">
      <img
        className="card-img-top"
        src={imgBaseUrl + poster_path}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>
        <a href="#" className="btn btn-primary align-self-end">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Movie;
