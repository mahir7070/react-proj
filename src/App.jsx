import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(0)

  // let counter=15;
  const addvalue=()=>{
    console.log('🐇');
    counter=counter+1;
    setcounter(counter)

  }
  const removevalue=()=>{
    console.log('🦊');
    if (counter-1<0) {
      return;
      
    }
    counter=counter-1;
    setcounter(counter)

  }
  return (


    <>
    <h1>counter</h1>
     <h2>counter value:{counter}</h2>

     <button onClick={addvalue}>add value</button>
     <br />
     <button onClick={removevalue}>remove  value</button>

    </>
  )
}

export default App
