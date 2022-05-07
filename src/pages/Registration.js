import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

export default function Register () {

  //post form to backend to store user data in db
  const submitHandler = async (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"username": username, "password": password, first_name: firstName, last_name:lastName}),
    })
    .then(navigate('/login'))
    .catch((error) => {
        console.log(error);
    });
  };

  //React Hooks
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  //Registration Form
    return(
      <div>
        <h1>REGISTER AN ACCOUNT</h1>

        <form onSubmit={submitHandler}>

          <p>
            <label>CREATE USERNAME:</label>
            <input type='text' onChange={(e) => setUsername(e.target.value)}/>
          </p>

          <p>
            <label>CREATE PASSWORD:</label>
            <input type='text' onChange={(e) => setPassword(e.target.value)}/>
          </p>

          <p>
            <label>FIRST NAME:</label>
            <input type='text' onChange={(e) => setFirstName(e.target.value)}/>
          </p>

          <p>
            <label>LAST NAME:</label>
            <input type='text' onChange={(e) => setLastName(e.target.value)}/>
          </p>

          <button type='submit'> CREATE ACCOUNT </button>

        </form>
      </div>
    )
};