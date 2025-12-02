import React from "react";
import { containerStyle } from "./hello-world-style";

function HelloWorldComponent() {
  return (
    <div style={containerStyle}>
      <h2>Welcome to Mern Day-2</h2>
      <p>This component is working properly!</p>
    </div>
  );
}

export default HelloWorldComponent;
