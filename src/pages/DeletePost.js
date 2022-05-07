import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeletePost() {

  //React Hooks -> 
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")))

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if(!userData){
      navigate('/register')
    }
  }, [])



    const submitHandler = async (e) => {
      e.preventDefault()
      fetch(`${process.env.REACT_APP_API_URL}/posts/`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"title": title, "user": userData.user}),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          navigate('/myposts')
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    return (
      <div>

        <h1>DELETE POST</h1>

          <form onSubmit={submitHandler}>

            <p>
              <label>Title:</label>
              <input type='text' onChange={(e) => setTitle(e.target.value)}/>
            </p>

            <button type='submit'> DELETE </button>

          </form>
        </div>
    )
};