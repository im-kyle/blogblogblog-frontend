import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [userInfo, setUserInfo] = useState(localStorage.getItem("userInfo"))

  if(userInfo) {
    return(
      <div>
        <Link to='/'> HOME </Link>
        <br></br>
        <Link to='/logout'> LOGOUT </Link>
        <br></br>
        <Link to='/myposts'> MyPOSTS </Link>
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
          <Link to='/'> LOGIN </Link>
          <br></br>
          <Link to='/'> REGISTER </Link>
          <br></br>
          <Link to='/'> VIEW POST </Link>
        </div>
      )
    }
};