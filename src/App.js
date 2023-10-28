import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, useMemo } from "react"

function App() {

  const [toggle, settoggle] = useState(false)
  console.log(' rendering_toggle')
  const [count, setcount] = useState(0)

  const increment = () => {
    console.log(' rendering_count ')
    setcount(count + 1)
  }

  const countNumber = (num) => {
    console.log('rendering_count_inside_countnumber', num)
    return num;
  }

  // const checkdata = countNumber(count)
  // const checkdata = countNumber(count)

  const checkdata = useEffect(() => {
    return countNumber(count)
  }, [count])


  return (
    <>
      <h3>
        welcome
      </h3>

      <button onClick={increment}>add</button>
      <p>{`count is ${count}`}</p>
      <p>{`check data count is ${checkdata}`}</p>
      <button onClick={() => settoggle(!toggle)}>
        {toggle ? "click me again" : "click me"}
      </button>

    </>
  );
}

export default App;






