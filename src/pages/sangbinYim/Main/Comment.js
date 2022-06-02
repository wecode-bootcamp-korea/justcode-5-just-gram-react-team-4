import React, { useState } from "react";
function Comment({ num ,id , comment, deleteComment }) {

  const [click, setClick] = useState(true)
  const heartClick = () => {
    if(click === true){ setClick(false)}
    else { setClick(true)}
  } 

    return(
    <ul className= 'CMU'> 
    <span className="CM">{id}</span><span>{comment}</span>
    <button className="delete" onClick={()=>deleteComment(num)}>삭제{console.log(num)}</button>
    
    {click === true ? 
    <img className="commentHeart" alt="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" onClick={heartClick}/>
    :
    <img className="commentHeart" alt="heart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/800px-Coraz%C3%B3n.svg.png"onClick={heartClick} /> }
    </ul> 
      ) 

    
}
export default Comment;