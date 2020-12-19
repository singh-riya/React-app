import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Para from "./Para";

// So there are 3 types components which we basically use in projects.

// 1. Functional component
// 2. Class component
// 3. High Order component

// This function here is a representative of Functional Component.
// Features.
// Light weighted. Easy to render. Highly accesible. Behaviour same as simple Javascript function. This is released I guess after React release 14.0 version. Alots of developers prefer this now a days.

function FunctionalApp() {
  return (
    <Fragment>
      <Heading />
      <Para />
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ol>
    </Fragment>
  );
}

function App() {
  return <FunctionalApp />;
}

ReactDOM.render(<App />, document.getElementById("root"));
