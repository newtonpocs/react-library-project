import React, { Component } from "react";

import ExampleComponent from "react-library-project";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent
          text="Modern React component module"
          textButton="texto clique aqui"
        />
      </div>
    );
  }
}
