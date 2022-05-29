import React from "react";
function Comment(props) {

    return(
    <ul key={props.data.id} className= 'CMU'> 
    <span className="CM">{props.data.id}</span><span>{props.data.comment} </span>
    </ul>
      ) 

    
}
export default Comment;