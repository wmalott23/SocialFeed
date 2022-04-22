import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{username: "Uncle Phil", body: "Will!"}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className="background p-0 col-md-12 d-flex align-items-center flex-column">
        <div className="navbar col-md-12 d-flex align-items-start flex-column">
          <NavBar/>
        </div>
        <div className='border-box d-flex col-md-6'>
          <CreatePost addNewPostProperty={addNewPost}/>
        </div>
        <div className='display-posts border-box col-md-6'>
          <DisplayPosts parentPosts={posts}/>
        </div>
    </div>
  );
}

export default App;
