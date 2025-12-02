import React from "react";
import { styles } from "./hello-world-style";

function HelloWorldComponent() {
  const phoneData = [
    { id: 1, name: "Ravi", phoneNumber: "9876543210" },
    { id: 2, name: "Pritam", phoneNumber: "9123456780" },
    { id: 3, name: "Amit", phoneNumber: "9000012345" },
  ];

  return (
    <div style={styles.container}>
      <h2>Hello World Component</h2>
      <p>This component is working properly!</p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.headerCell}>Name</th>
            <th style={styles.headerCell}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {phoneData.map((person) => (
            <tr key={person.id}>
              <td style={styles.dataCell}>{person.name}</td>
              <td style={styles.dataCell}>{person.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HelloWorldComponent;