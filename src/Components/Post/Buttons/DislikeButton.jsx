import React, { useState } from 'react';
import "./DislikeButton.css"

const DislikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive")

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }
    }
        return ( 
            <button>    
                <i className="bi bi-hand-thumbs-down" onClick={handleClick}/>
            </button>
        );
}
 
export default DislikeButton;