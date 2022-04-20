import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';



function App() {

  const [posts, setPosts] = useState([{username: "Uncle Phil", body: "Will!", likes: 0, dislikes: 0}])

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div>
        <h3>Social
          <small>Tracker</small>
        </h3>
        <div>
          <CreatePost addNewPostProperty={addNewPost}/>
        </div>
        <div>
          <DisplayPosts parentPosts={posts} />
        </div>
    </div>
  );
}

export default App;
