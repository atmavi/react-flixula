import React, { Component } from "react";
import Navbar from "./components/nav";
import Movies from "./components/movies";
import Header from "./components/header";
import "./App.css";

import axios from "axios";

class App extends Component {
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
      <div className="App">
        <Navbar />
        <Header movies={movies.slice(0, 5)} />
        <Movies />
      </div>
    );
  }
}

export default App;
