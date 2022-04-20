import React from "react";

const Post = ({username, body}) => {
    return (  
        <div className='Container'>
            <h6>{username}</h6>
            <p>{body}</p>
            <div className='row'>
                <i className="bi bi-hand-thumbs-up"></i>
                <i className="bi bi-hand-thumbs-down"></i>
            </div>
        </div>
    );
}
 
export default Post;