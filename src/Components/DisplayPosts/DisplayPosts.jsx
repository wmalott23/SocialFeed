import React from 'react';
import Post from '../Post/Post';
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (  
        props.parentPosts.map((post) => {
        return(
                <div>
                    <Post username={post.username} body={post.body}/>
                </div>
        )}));
}
 
export default DisplayPosts;