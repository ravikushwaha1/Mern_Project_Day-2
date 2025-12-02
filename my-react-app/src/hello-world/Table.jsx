import React from "react";
import { containerStyle } from "./hello-world-style";

function HelloWorldComponent() {
  return (
    <div style={containerStyle}>
      <h2>Hello World Component</h2>
      <p>This component is working properly!</p>

      {/* Phone Number Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Phone Number</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={cellStyle}>Ravi</td>
            <td style={cellStyle}>9876543210</td>
          </tr>

          <tr>
            <td style={cellStyle}>Pritam</td>
            <td style={cellStyle}>9123456780</td>
          </tr>

          <tr>
            <td style={cellStyle}>Amit</td>
            <td style={cellStyle}>9000012345</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Cell styling
const cellStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "left",
};

export default HelloWorldComponent;
