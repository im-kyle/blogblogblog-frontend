import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ViewPost() {

  //React Hooks -> useLocation: a function that returns the location object that contains information about the current URL. Whenever the URL changes, a new location object will be returned.
  const location = useLocation();
  const [title, setTitle] = useState()
  const [postInfo, setPostInfo] = useState();

  console.log('LOCATION', location);
  console.log('TITLE', title);
  console.log('POST INFO', postInfo)

  useEffect(() => {
    if(location?.state?.title) {
      setTitle(title)
    }
  })

  //Event Handler -> GET the post data
  const submitHandler = async (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/posts/specific/${title}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
      setPostInfo(data)
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const clickSubmitHandler = async (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/posts/specific/${location?.state?.title}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
      setPostInfo(data)
    })
    .catch((error) => {
      console.log(error);
    });
  };


  //If we have the post -> Render our view post page
  if (!postInfo) {
    if (location?.state) {
      return (
        <div>

          <h1> VIEW A POST </h1>

          <form onSubmit={clickSubmitHandler}>

            <p>
              <label>TITLE:</label>
              <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Enter a post title'/>
            </p>

            <button type='submit' onClick={submitHandler}> VIEW POST </button>

          </form>
        </div>
     )
     }
  } else {
    return(
      <div>
        <h1>{postInfo[0]?.title}</h1>
        <p>{postInfo[0]?.content}</p>
      </div>
    )
  }
};