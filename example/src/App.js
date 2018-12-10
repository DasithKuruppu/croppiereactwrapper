import React, { Component } from "react";

import ExampleComponent from "croppiereactwrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent
          text="Modern React component module"
          options={{
            viewport: { width: 100, height: 100 },
            boundary: { width: 300, height: 300 },
            showZoomer: false,
            enableOrientation: true
          }}
        />
      </div>
    );
  }
}
