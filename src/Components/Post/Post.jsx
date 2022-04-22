import React, { useState } from "react";
import LikeButton from './Buttons/LikeButton'
import './Post.css'



const Post = ({username, body}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    return (  
        <div className='post container-fluid'>
            <h6 className="username justify-self-center">{username}</h6>
            <p className="message text-secondary">{body}</p>
            <div className="d-flex justify-content-end">
                <h5 className="p-2">Posted on {date}</h5>
                <LikeButton />
            </div>
            <hr/>
        </div>
    );
}
 
export default Post;