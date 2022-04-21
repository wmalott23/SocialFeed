import React, { useState } from 'react';
import './CreatePost.css'


const CreatePost = (props) => {

    const [username, setUsername] = useState(0);
    const [body, setBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            username: username,
            body: body,
        };
        props.addNewPostProperty(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type='text' onChange={(event) => setBody(event.target.value)}/>
            </div>
                <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePost;