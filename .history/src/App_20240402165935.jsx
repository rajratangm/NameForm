import { useState } from 'react'
// import './App.css'

function App() {
  const handleSubmit=()=>{
    preventDefault()
  }

  return (
    <>
    <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
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

    <p


    </>
  )
}

export default App

