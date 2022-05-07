import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  //React Hooks -> on login -> navigate to user profile
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if(userData){
      navigate('/myposts')
    }
  }, [])

  //Form Submission Event Handler -> Login user
  const submitHandler = async (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"username": username, "password": password}),
    })
    .catch((error) => {
        console.log(error);
    })
    .then(response => response.json())
    .then(data => {
      if(data.user){localStorage.setItem('userData', JSON.stringify(data))}
      navigate('/');
    })
  };
  
  //Render User Login Form
  return(
    <div>
      <h1>LOGIN</h1>

      <form onSubmit={submitHandler}>

        <p>
          <label>ENTER USERNAME:</label>
          <input type='text' onChange={(e) => setUsername(e.target.value)}></input>
        </p>

        <p>
          <label>ENTER PASSWORD:</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
        </p>

        <button type='submit'> CLICK HERE TO LOGIN </button>

        <h4>NOT REGISTERED?</h4>

      </form>

      <Link to='/register'>
        <button type='button'> CLICK HERE TO REGISTER </button>
      </Link>
    </div>
  )
}