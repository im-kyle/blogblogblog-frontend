import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [userData, setUserData] = useState(localStorage.getItem("userData"))
  const [reloadState, setReloadState] = useState(0)

  useEffect(() => {
    setReloadState(reloadState + 1)
  }, [])

  if(userData) {
    return(
      <div>
        <Link to='/'> HOME </Link>
        <br></br>
        <Link to='/logout'> LOGOUT </Link>
        <br></br>
        <Link to='/myposts'> MyPOSTS </Link>
        <br></br>
        <Link to='/viewposts'> VIEW </Link>
        <br></br>
        <Link to='/createpost'> CREATE </Link>
        <br></br>
        <Link to='/editpost'> EDIT </Link>
        <br></br>
        <Link to='/deletepost'> DELETE </Link>
      </div>
    )
  }
  else {
    return(
        <div>
          <Link to='/'> HOME </Link>
          <br></br>
          <Link to='/login'> LOGIN </Link>
          <br></br>
          <Link to='/register'> REGISTER </Link>
          <br></br>
          <Link to='/viewpost'> VIEW POST </Link>
        </div>
      )
    }
};