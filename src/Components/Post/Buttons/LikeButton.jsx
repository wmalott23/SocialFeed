import React, { useState } from 'react';
import "./LikeButton.css"

const LikeButton = (props) => {

    const [likeButtonClass, setButtonClass] = useState("like-inactive");

    function handleClick(){
        if(likeButtonClass === "like-inactive"){
            setButtonClass("like-active");
        }
        else{
            setButtonClass("like-inactive");
        }
    }
        return ( 
            <i className={likeButtonClass} onClick={handleClick}>{props.className}</i>
        );
}
 
export default LikeButton;