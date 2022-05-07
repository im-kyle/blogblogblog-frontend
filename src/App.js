import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './pages/Pages.css';

import Navbar from './components/Navbar.js';

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Registration from './pages/Registration.js';
import MyPosts from './pages/MyPosts.js';
import CreatePost from './pages/CreatePost.js';
import DeletePost from './pages/DeletePost.js';
import Logout from './pages/Logout.js';
import EditPost from './pages/EditPost.js';
import ViewPost from './pages/ViewPost.js';

export default function App() {
return (
  <div className='center'>
    <main>
      <Navbar/>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Registration />} />
            <Route path = '/myposts' element = {<MyPosts />} />
            <Route path = '/createpost' element = {<CreatePost />} />
            <Route path = '/deletepost' element = {<DeletePost />} />
            <Route path = '/logout' element = {<Logout />} />
            <Route path = '/editpost' element = {<EditPost />} />
            <Route path = '/viewpost' element = {<ViewPost />} />
          </Routes>
    </main>
  </div>
);
};