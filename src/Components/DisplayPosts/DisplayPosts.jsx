import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return (  
        props.parentPosts.map((post) => {
        return(
            <Post username={post.username} body={post.body}/>
        )}));
}
 
export default DisplayPosts;