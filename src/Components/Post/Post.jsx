import React from "react";
import './Post.css'

const Post = ({username, body}) => {
    return (  
        <div className='container-fluid'>
            <h6 className="justify-self-center">{username}</h6>
            <p>{body}</p>
            <div className="d-flex flex-row-reverse">
                <button className="bi bi-hand-thumbs-up"></button>
                <button className="bi bi-hand-thumbs-down"></button>
            </div>
        </div>
    );
}
 
export default Post;