import React from "react";

function Comment(props) {
  return (
    <>
      <li key={props.data.userName}>
        <span className="userId">{props.data.userName}</span>
        <span> {props.data.content}</span>
      </li>
    </>
  );
}
export default Comment;
