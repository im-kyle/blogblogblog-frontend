import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [userData, setUserData] = useState(localStorage.getItem("userData"))
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    setForceUpdate(true)
  }, [])

  if(userData && forceUpdate) {
    return(
      <div className='Navbar'>
        BLOG!BLOG!BLOG!
        <br></br>
        <Link to='/'> HOME </Link> || 
        <Link to='/logout'> LOGOUT </Link> ||
        <Link to='/myposts'> MyPOSTS </Link> ||
        {/* <Link to='/viewpost'> VIEW </Link>
        <br></br> */}
        <Link to='/createpost'> CREATE </Link> ||
        <Link to='/editpost'> EDIT </Link> ||
        <Link to='/deletepost'> DELETE </Link>
      </div>
    )
  }
  else {
    return(
        <div className='Navbar'>
          <Link to='/'> HOME </Link>
          <br></br>
          <Link to='/login'> LOGIN </Link>
          <br></br>
          <Link to='/register'> REGISTER </Link>
          <br></br>
          {/* <Link to='/viewpost'> VIEW POST </Link> */}
        </div>
      )
    }
};