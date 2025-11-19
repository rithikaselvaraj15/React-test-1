import React, { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const showValue = () => {
    console.log("Uncontrolled Input Value:", inputRef.current.value);
  };

  return (
    <div>
      <h3>Uncontrolled Component Example</h3>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
}

export default UncontrolledInput;
