import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout (){

  //React Hooks -> Clear local storage. Navigate to Root Route. Refresh the Page
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate('/')
    window.location.reload();
  }, [])

  return(
    <h1>
      Logging Out
    </h1>
  )
};