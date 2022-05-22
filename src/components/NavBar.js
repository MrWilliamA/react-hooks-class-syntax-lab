import { default as react, default as React } from "react";

class NavBar extends react.Component {
  render() {
    return (
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    );
  }
}

export default NavBar;
