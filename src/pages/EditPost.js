import React, { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ViewEditPost() {

  //React Hooks -> establish states, get userData. If not authenticated -> registration page
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState()
  const [postInfo, setPostInfo] = useState();
  const [editContent, setEditContent] = useState();
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")))

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if(!userData){
      navigate('/register')
    }
  }, [])


  //Event Handlers and Helper Functions

  //onSubmit -> GET post
  const submitHandler = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/posts/specific/${title}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPostInfo(data)

    })
    .catch((error) => {
      console.log(error);
    });
  };

  //onClick -> GET post
  const clickSubmitHandler = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/posts/specific/${location.state.title}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setPostInfo(data)

    })
    .catch((error) => {
        console.log(error)
    });
  };

  //POST post changes to backend
  const editHandler = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_API_URL}/posts/edit`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"title": title, "content": editContent, "created_by": userData.user})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        navigate('/myposts')
    })
    .catch((error) => {
        console.log(error);
        navigate('/logout')
    });
  };

  //Render posts. View and Edit options
  if (!postInfo){
    if (location.state) {
      return (
        <div>

          <h1>View/Edit Post </h1>

            <form onSubmit={clickSubmitHandler}>

              <p>
                <label>Title:</label>
                <input onChange={(e) => setTitle(e)} type='text' defaultValue = {location.state.title}/>
              </p>

              <button type='submit'> VIEW </button>

            </form>
        </div>
      )
    }
    else {
        return (
            <div className='center'>

              <h1>View/Edit Post </h1>

                <form onSubmit={submitHandler}>

                  <p>
                    <label>Title:</label>
                    <input  type='text' onChange={(e) => setTitle(e.target.value)}/>
                  </p>

                  <button type='submit'> VIEW </button>

                </form>
            </div>
        )
    }
  }
  if (postInfo){
    return (
        <div className='center'>

          <h1>{postInfo[0]?.title}</h1>

            <form onSubmit={editHandler}>

            <p>
              <label>Content:</label>
              <input onChange={(e) => setEditContent(e.target.value)} type="text" defaultValue = {postInfo[0]?.content} />
            </p>

            <button type='submit'> SUBMIT EDITS </button>

        </form>
        </div>
    )
  }
};