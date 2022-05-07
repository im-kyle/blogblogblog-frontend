import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {

  //React Hooks
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userData, setUserData] =useState(JSON.parse(localStorage.getItem("userData")))

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if(!userData){
      navigate('/register')
    }
  }, [])

  //Form Submit Handler -> POST the new post to the backend.
  const submitHandler = async (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"title": title,"content": content,"created_by": userData.user}),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        navigate('/myposts')
    })
    .catch((error) => {
        console.log(error);
    });
};

return (
  <div>
    <h1>Create Post</h1>

    <form onSubmit={submitHandler}>

      <p>
        <label>Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)}/>
      </p>

      <p>
        <label>Content:</label>
        <input type="text" onChange={(e) => setContent(e.target.value)}/>
      </p>

        <button type="submit"> CREATE! </button>

      </form>
  </div>
)

};