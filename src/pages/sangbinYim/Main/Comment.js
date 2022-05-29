import React from "react";
function Comment(props) {

    return(
    <ul className= 'CMU'> 
    <span className="CM">{props.id}</span><span>{props.comment} </span>
    </ul>
      ) 

    
}
export default Comment;