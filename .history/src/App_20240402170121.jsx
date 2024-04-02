import { useState } from 'react'
// import './App.css'

function App() {
  const [firstName, setFirstName]
  const handleSubmit=()=>{
    preventDefault()
  }

  return (
    <>
    <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type='text' value={firstName} onChange={handleFirstName} required/>
      </div>
      <div>
        <label>Last Name:</label>
        <input type='text' value={lastName} onChange={handleLaststName} required/>
      </div>
      <button>Submit</button>

    </form>

    <p>Full Name :{firstName} {LastName}</p>


    </>
  )
}

export default App

