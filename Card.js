import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "15px", margin: "10px" }}>
      {children}
    </div>
  );
}

export default Card;
