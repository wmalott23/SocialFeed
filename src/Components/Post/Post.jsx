import React, { useState } from "react";
import './Post.css'
import LikeButton from './Buttons/LikeButton'
import DislikeButton from './Buttons/DislikeButton'


const Post = ({username, body}) => {

    return (  
        <div className='post container-fluid'>
            <h6 className="justify-self-center">{username}</h6>
            <p className="text-secondary">{body}</p>
            <div className="d-flex flex-row-reverse">
                <LikeButton className="bi bi-hand-thumbs-up"/>
                <DislikeButton className="bi bi-hand-thumbs-up"/>
            </div>
            <hr/>
        </div>
    );
}
 
export default Post;