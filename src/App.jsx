import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card" bg-blue-400>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <img src="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg" bg-blue-400/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
