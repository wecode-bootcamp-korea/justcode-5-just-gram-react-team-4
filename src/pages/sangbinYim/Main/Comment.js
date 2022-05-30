import React from "react";
function Comment({id , comment}) {

    return(
    <ul className= 'CMU'> 
    <span className="CM">{id}</span><span>{comment} </span>
    </ul>
      ) 

    
}
export default Comment;