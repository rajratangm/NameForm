import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Full Name Display</h1>
    <p>First Name:<input type='text' value={'first'} ></input></p>
    <p>Last Name:<input></input></p>
    <button>Submit</button>
    


    </>
  )
}

export default App
