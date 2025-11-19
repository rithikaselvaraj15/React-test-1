import React, { useState } from "react";
import Card from "./Card";

function Home(props) {
  const [count, setCount] = useState(0); // state

  return (
    <div>
      <h1>{props.title}</h1> {/* using props */}

      <Card>
        <h3>Counter Example (State)</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </Card>
    </div>
  );
}

export default Home;
