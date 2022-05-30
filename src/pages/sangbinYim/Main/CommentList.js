import React from "react";

function CommentList({name , comment }){

    return (
        <ul className= 'CMU'>
        <span className="CM">{name}</span> <span>{comment}</span>
        </ul>

    )
}

export default CommentList;