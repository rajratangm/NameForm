import { useState } from 'react'
// import './App.css'

function App() {

  return (
    <>
    <h1>Full Name Display</h1>
    <form on>
      <div>
        <label>First Name:</label>
        <input type='text' required/>
      </div>
      <div>
        <label>Last Name:</label>
        <input type='text' required/>
      </div>
      <button>Submit</button>

    </form>


    </>
  )
}

export default App

