import React, { useState } from "react";
import LikeButton from './Buttons/LikeButton'
import DislikeButton from './Buttons/DislikeButton'
import './Post.css'



const Post = ({username, body}) => {

    return (  
        <div className='post container-fluid'>
            <h6 className="username justify-self-center">{username}</h6>
            <p className="message text-secondary">{body}</p>
            <div className="d-flex flex-row-reverse">
                <DislikeButton />
                <LikeButton />
            </div>
            <hr/>
        </div>
    );
}
 
export default Post;