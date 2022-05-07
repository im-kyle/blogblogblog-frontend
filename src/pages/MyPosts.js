import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPosts() {

  //React Hooks -> get userData from local storage. Fetch that userData from backend.
  const navigate = useNavigate();
  const [posts, setPosts] = useState(false)
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")))

  useEffect(() => {
      const userData = localStorage.getItem("userData");
  }, [])

  useEffect(function(){
    fetch(`${process.env.REACT_APP_API_URL}/posts/user/${userData.user}`)
      .then(response => response.json())
      .then(response => setPosts([response]))
      .catch((err) => console.error(err))
  }, []);


  //Helper Functions & Event Handlers
  const checkLength = ((input) => {
    if (input.length > 100){
        let shortInput = `${input.slice(0, 100)}...`
        return shortInput
    }
    else return input
  })

  const clickHandler = (i) => {
   console.log(i)
  }

  if (posts) {
    return (
      <div>
      <h1> MyPOSTS </h1>
        {posts[0].map((posts, i) => {
          return(
            <div>
              <button onClick = {() => clickHandler(posts.title)}>
                 <h3> {posts.title} </h3>
                 <p> {checkLength(posts.content)} </p>
                 <p> {posts.created_at} </p>
              </button>
            </div>
              )
          })}
      </div> 
    )
    } else {
      return <h1> LOADING YOUR POSTS... PLEASE WAIT </h1>;
    }
};
