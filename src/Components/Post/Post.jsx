import React from "react";
import './Post.css'

const Post = ({username, body}) => {
    return (  
        <div className='post container-fluid'>
            <h6 className="justify-self-center">{username}</h6>
            <p className="text-secondary">{body}</p>
            <div className="d-flex flex-row-reverse">
                <i className="bi bi-hand-thumbs-down"></i>
                <i className="bi bi-hand-thumbs-up"></i>
            </div>
            <hr/>
        </div>
    );
}
 
export default Post;