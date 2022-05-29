import React from "react";

function CommentList(props){


    return (
        <ul className= 'CMU'>
        <span className="CM">{props.name}</span> <span>{props.comment}</span>
        </ul>

    )
}

export default CommentList;