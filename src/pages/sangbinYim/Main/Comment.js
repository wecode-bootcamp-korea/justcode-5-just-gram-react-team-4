import React from "react";
function Comment({ num ,id , comment, deleteComment }) {

 

    return(
    <ul className= 'CMU'> 
    <span className="CM">{id}</span><span>{comment}</span>
    <button className="delete" onClick={()=>deleteComment(num)}>삭제{console.log(num)}</button>
    </ul> 
      ) 

    
}
export default Comment;