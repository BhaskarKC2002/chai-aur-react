import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("Clicked", counter)
    // counter = counter + 1
    // setCounter(counter + 1) //If done 4 times, counter increase only once, as useState sends updates in batches.
    setCounter(prevCounter => prevCounter + 1) //Here used callback so proper update each time
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    if (counter >= 1) {
            setCounter(counter -  1)
    }

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button 
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick = {removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
