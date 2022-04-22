import React, { useState } from 'react';
import "./LikeButton.css"

const LikeButton = (props) => {

    const [likeButtonClass, setLikeButtonClass] = useState("zero");
    const [dislikeButtonClass, setDislikeButtonClass] = useState("zero");

    function handleLikeClick(){
        if(likeButtonClass === "zero"){
            setLikeButtonClass("one");
            setDislikeButtonClass("zero");
        }
        else{
            setLikeButtonClass("zero");
        }
    }
    function handleDislikeClick(){
        if(dislikeButtonClass === "zero"){
            setDislikeButtonClass("two");
            setLikeButtonClass("zero");
        }
        else{
            setDislikeButtonClass("zero");
        }
    }        return ( 
                <div>
                    <button className={likeButtonClass} onClick={handleLikeClick}>    
                        <i className="bi bi-hand-thumbs-up"/>
                    </button>
                    <button className={dislikeButtonClass} onClick={handleDislikeClick}>    
                        <i className="bi bi-hand-thumbs-down"/>
                    </button>
                </div>
    );
}
 
export default LikeButton