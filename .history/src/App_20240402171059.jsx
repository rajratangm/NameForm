import { useState } from 'react'
// import './App.css'

function App() {
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit=(event)=>{
    event.preventDefault()
    setSubmitted(true)
  }

  const handleFirstName=(event)=>{
    setFirstName(event.target.value)
  }

  const handleLaststName=(event)=>{
    setLastName(event.target.value)
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
        <input type='text' value={lastName} onChange={handleLasttName} required/>
      </div>
      <button type='submit'>Submit</button>

    </form>

    {
      submitted &&(
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )
    }


    </>
  )
}

export default App

