import React, { useState } from 'react';

const LikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass =="inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }
    }
    return ( 
        <i className={buttonClass} onClick={handleClick}></i>
     );
}
 
export default LikeButton;