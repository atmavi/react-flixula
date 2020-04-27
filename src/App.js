import React from "react";
import Navbar from "./components/nav";
import Movies from "./components/movies";
// import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Carousel /> */}
      <Movies />
    </div>
  );
}

export default App;
