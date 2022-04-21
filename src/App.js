import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{username: "Uncle Phil", body: "Will!", likes: 0, dislikes: 0}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="background">
        <div className="navbar">
          <NavBar/>
        </div>
        <div className='border-box col-md-6 justify-self-center'>
          <CreatePost addNewPostProperty={addNewPost}/>
        </div>
        <div className='border-box col-md-6 "d-flex align-items-stretch"'>
          <DisplayPosts parentPosts={posts}/>
        </div>
    </div>
  );
}

export default App;
