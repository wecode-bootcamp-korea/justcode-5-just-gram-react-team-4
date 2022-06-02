import React from "react";
function Comment({ data, onRemove }) {
  return (
    <>
      <li key={data.id}>
        <span className="userId">{data.userName}</span>
        <span> {data.content}</span>
        <button
          className="delBtn"
          onClick={() => {
            onRemove(data.id);
          }}
        >
          삭제
        </button>
      </li>
    </>
  );
}
export default Comment;
