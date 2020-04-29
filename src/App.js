import React from "react";
import Navbar from "./components/nav";
import Movies from "./components/movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
