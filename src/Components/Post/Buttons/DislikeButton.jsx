import React, { useState } from 'react';
import "./LikeButton.css"

const DislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("zero")

    function handleClick(){
        if(buttonClass === "zero"){
            setButtonClass("two");
        }
        else{
            setButtonClass("zero");
        }
    }
        return ( 
            <button className={buttonClass} onClick={handleClick}>    
                <i className="bi bi-hand-thumbs-down"/>
            </button>
        );
}
 
export default DislikeButton;