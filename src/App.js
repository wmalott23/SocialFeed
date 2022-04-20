import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';



function App() {

  const [posts, setPosts] = useState([{username: "Uncle Phil", body: "Will!", likes: 0, dislikes: 0}])

  return (
    <div>
        <h3>Social
          <small>Tracker</small>
        </h3>
        <div>
          <DisplayPosts parentPosts={posts} />
        </div>
    </div>
  );
}

export default App;
