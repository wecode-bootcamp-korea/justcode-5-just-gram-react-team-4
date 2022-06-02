import React, { useState, useEffect } from "react";
import Comment from "./Comment";
function CommentList({ commentArray, setCommentArray }) {
  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then((res) => res.json())
      .then((data) => {
        setCommentArray(data);
      });
  }, []);

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setCommentArray(commentArray.filter((x) => x.id !== id));
  };

  return (
    <>
      {commentArray.map((data) => (
        <Comment data={data} onRemove={onRemove} />
      ))}
    </>
  );
}

export default CommentList;
