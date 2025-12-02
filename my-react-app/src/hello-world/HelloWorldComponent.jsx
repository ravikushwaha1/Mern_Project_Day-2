import React from "react";
import "./HelloWorldComponent.css"; // Make sure this CSS file exists

function HelloWorldComponent() {
  // Phone data
  const phoneData = [
    { id: 1, name: "Ravi", phoneNumber: "9876543210" },
    { id: 2, name: "Pritam", phoneNumber: "9123456780" },
    { id: 3, name: "Amit", phoneNumber: "9000012345" },
  ];

  return (
    <div className="hello-container">
      <h2>Hello World Ravi Component</h2>
      <p>This component is working properly!</p>

      <table className="phone-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {phoneData.map((person) => (
            <tr key={person.id} className="table-row">
              <td className="table-cell">{person.name}</td>
              <td className="table-cell">{person.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HelloWorldComponent;