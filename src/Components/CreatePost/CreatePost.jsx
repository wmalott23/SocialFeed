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
        <form className="create-post d-flex flex-column align-items-start margin-2 col-md-12" onSubmit={handleSubmit}>
            <div className="box d-flex flex-row col-md-12 text-muted">
                <label className="label align-self-center">Name</label>
                <textarea className="input p-1 justify-self-center " type='text' onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="lower-box d-flex flex-row col-md-12 text-muted">
                <label className="lower-label align-self-start">Post:</label>
                <textarea className="input p-3 justify-self-center" type='text' onChange={(event) => setBody(event.target.value)}/>
                <button className="button btn-primary align-self-end" type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default CreatePost;