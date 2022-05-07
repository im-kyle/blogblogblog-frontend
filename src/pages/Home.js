import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

export default function Home() {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState(localStorage.getItem("userData"))
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    fetch(`${process.env.REACT_APP_API_URL}/posts`)
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))
  }, [])

  const selectPost = (i) => {
    //Check to see if user is authenticated
    if (userData) {
      navigate('/editpost', {state: {title: i}})
    } else {
      navigate('/viewpost', {state: {title: i}})
    }
  }

  const checkLength = ((input) => {
    if (input.length > 100){
      let shortenInput = `${input.slice(0, 100)}...`
      return shortenInput
    } else { 
      return input
  }});

  //If we've successfully pulled the data -> render the posts
  if (posts) {
    return(
      <>
        <div className='home'>
          <h1 className='title'>ALL POSTS</h1>
          {posts.map((posts, i) => {
            return(
              <div key={posts.id}>
                {/* Place Entire Post Inside Button So Users Can Click Directly On The Post to View */}
                <button className='postButton' onClick={() => selectPost(posts.title)}>
                  <h3>{posts.title}</h3>
                  <p>{checkLength(posts.content)}</p>
                  <p>{posts.created_at}</p>
                  <p>Author: {posts.created_by}</p>
                </button>
              </div>
            )
          })}
        </div>
      </>
    )
  } else {
    return <h1>LOADING POSTS... PLEASE WAIT</h1>
  }
};