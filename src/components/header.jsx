import React, { Component } from "react";

class Header extends Component {
  state = {
    displayed: 0,
  };
  render() {
    return (
      <header className="header">
        <div className="banner">
          <img src="" alt="" className="banner__img" />
        </div>
        <div className="featured"></div>
      </header>
    );
  }

  displayNext() {}
}

export default Header;
