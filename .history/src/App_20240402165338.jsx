// import { useState } from 'react'
// // import './App.css'

// function App() {

//   return (
//     <>
//     <h1>Full Name Display</h1>
//     <form>
//       <div>
//         <label>First Name:</label>
//         <input type='text'/>
//       </div>
//       <div>
//         <label>Last Name:</label>
//         <input type='text'/>
//       </div>
//       <button>Submit</button>

//     </form>


//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Check if both fields are filled
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
    } else {
      // Handle edge case: one or both fields empty
      setFullName("Please fill in both fields");
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type='text'
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}

export default App;
