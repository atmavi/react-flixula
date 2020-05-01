import React from "react";

const Gallery = ({ movies }) => {
  const posters = movies.map((movie) => movie.poster_path);

  const bgImg = (url) => {
    const fullUrl = "https://image.tmdb.org/t/p/w500" + url;

    return {
      backgroundImage: `url(${fullUrl})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };
  };

  return (
    <div className="gallery">
      <div style={bgImg(posters[0])} className="row-full">
        1/1
      </div>
      <div style={bgImg(posters[1])} className="row-half row-half--1">
        1/2
      </div>
      <div style={bgImg(posters[2])} className="row-half row-half--2">
        1/2
      </div>
      <div style={bgImg(posters[3])} className="row-third row-third--1">
        1/3
      </div>
      <div style={bgImg(posters[4])} className="row-third row-third--2">
        1/3
      </div>
      <div style={bgImg(posters[5])} className="row-third row-third--3">
        1/3
      </div>
    </div>
  );
};

export default Gallery;
