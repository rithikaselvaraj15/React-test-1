import React, { useState } from "react";
import UncontrolledInput from "./UncontrolledInput";

function Contact() {
  // controlled component state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div>
      <h1>Contact Page</h1>

      {/* Controlled Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* Uncontrolled Component */}
      <UncontrolledInput />
    </div>
  );
}

export default Contact;
