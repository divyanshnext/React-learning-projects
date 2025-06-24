// isme useState padhenge

import { useState } from 'react'
import './App.css'

function App() {

  // useState - it is a hook - ye resoponsible hota hai state ko change krne ke liye
  let [counter,setCounter] = useState(15) // smjho isko - counter nam ke variable me 15 store kr rhe hai aur setCounter ek function hai jo is value ko change krne me kam aayega
  // let counter = 15;

  const addValue = () => {
    if(counter < 20) setCounter(counter  + 1)
    // counter = counter + 1;
     // setCounter .. counter variable ka function hai jo change krne me kam aata hai 
  }
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1)
    else{
  console.log('crossed the limit')
    }
  }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>

      <button
      onClick={removeValue}>remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
