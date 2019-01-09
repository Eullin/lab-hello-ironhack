import React, { Component } from "react";
import "../src/App.css";

const Header = () => {
  return (
    <div className="header">
      <img src="../public/images/icon2.png" alt="LOGO" />
      <img src="../public/images/icon2.png" alt="MENU" />
    </div>
  );
};

const Text = () => {
  return (
    <div className="Text">
      <div className="WelcomeText">
        <h1>
          Say aloha to <br /> ReactJS
        </h1>
        <p>
          You will learn a Frontend <br /> Framework from scratch.
        </p>
        <a>Awesome!</a>
      </div>
    </div>
  );
};

const Features = props => {
  return (
<div className="features">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
</div>
  );
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Text />
        <Features
          title="Declarative"
          description="React makes it painless to create interactive UIs"
        />
        <Features
          title="Components"
          description="Build encapsulated components that manage their state."
        />
        <Features
          title="Single-Way"
          description="A set of immutable values are passed to the component's"
        />
        <Features
          title="JSX"
          description="Statucally-typed designed to run on modern browsers"
        />
      </div>
    );
  }
}

export default App;
