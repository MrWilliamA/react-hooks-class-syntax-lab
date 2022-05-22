import { default as React, default as react } from "react";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

console.log(user);

class App extends react.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home username={user.name} city={user.city} color={user.color} />
        <About bio={user.bio} links={user.links} />
      </div>
    );
  }
}

export default App;
