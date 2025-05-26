import { useState } from 'react'
import helloGif from './assets/hello.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={helloGif} className="logo" alt="" />
      </div>
      <h1>Hello World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className='introduction'>
        If you're reading this, then you are on my first react website!
      </p>
    </>
  )
}

export default App
