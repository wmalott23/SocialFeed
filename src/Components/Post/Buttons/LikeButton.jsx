import React, { useState } from 'react';
import "./LikeButton.css"

const LikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("zero");

    function handleClick(){
        if(buttonClass === "zero"){
            setButtonClass("one");
        }
        else{
            setButtonClass("zero");
        }
    }
        return ( 
            <button className={buttonClass} onClick={handleClick}>    
                <i className="bi bi-hand-thumbs-up"/>
            </button>
        );
}
 
export default LikeButton