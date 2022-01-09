import React from "react";

function App() {
  return (
    <div>
      <h1>Heloooooo</h1>
    </div>
  );
}

export default App;

/*import "./App.css";
import Student from "./student";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("John Terry");
  return (
    <div className="App">
      <h1> Use of Props.</h1>
      <Student
        name={name}
        email="suman@gmail.com"
        other={{ address: "Helsinki", profession: "student" }}
      />
      <button
        onClick={() => {
          setName("Suman");
        }}
      >
        Click for Real Hero
      </button>

      <Student
        name="Daniel Vettroi"
        email="dani@ufc.com"
        other={{ address: "New York", profession: "Football player" }}
      />
    </div>
  );
}

export default App;

/*import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Welcome to my counter App</h1>
      <p>The count is: {count} </p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default App;

/*
//On every render

useEffect(() => {
  console.log('I re-render')
});

// On first render / Mount only / ComponentDidMount Alternative
useEffect(() => {
  console.log('The component mounted')
}, []);

// On first render + whenever dependency changes ! - ComponentDidupdate alternative
useEffect(() => {
  console.log(`The name changed!: ${name}, ${age}`);
}, [name, age]);
*/
