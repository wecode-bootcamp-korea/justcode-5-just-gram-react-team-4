import React from "react";

function Comment(props){

    return(
        <li key={props.data.id}>
            <span className="userId">{props.data.id}</span>
            <span> {props.data.text}</span>
        </li>
    )
}
export default Comment;