import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //Function to add the count
  const addCount = () => {
    setCount(count + 1)
  }

  // const addCount = () => {
  //   setCount(Precount => Precount + 1)
  //   setCount(Precount => Precount + 1)
  //   setCount(Precount => Precount + 1)
  // }

  //Function to Remove the count
  const removeCount = () => {
    //added a check to avoid negative values
    if (count >= 1) {  
      setCount(count - 1)
    }
    
  }

  return (
    <>
      <h1>TM Web Dev</h1>
      <h2>Counter is: {count}</h2>

      <button onClick={addCount}>Increase count</button>
      <br />
      <br />
      <button onClick={removeCount}>Decrease count</button>
    </>
  );
}

export default App;
