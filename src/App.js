//UseEffect allows us to perform side effects

// Class based components
// componentDidMount - when component mounts / loads
// componentDidUpdate(prevProps) - when component props changes
// componentWillUnmount- when component unmounts/ cleanup function

// Functional components

import React, { useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //On Every Render
  useEffect(() => {});

  //On first Render / Mount Only ! - Similar to componentdidMount
  useEffect(() => {}, []);

  //On first Render + whenever dependency changes ! - similar to componentDidUpdate
  useEffect(() => {}, [name]); //props, pieces of state can be included,

  //Follows the same rules, except his handles the unmounmting on a component! -  like componentWillMount
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  return (
    <div>
      <h1> Heloooooooooo</h1>
    </div>
  );
}

export default App;
