import React, { useState } from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

function Feed({ dataF }) {
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([
    { userName: "", content: comment },
  ]);
  const [heartState, setHeartState] = useState(false);

  const handleHeart = () => {
    if (heartState === false) {
      setHeartState(true);
    } else {
      setHeartState(false);
    }
  };

  const handleCommentInput = (e) => {
    setComment(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      e.preventDefault();
      const curArray = [...commentArray];
      curArray.push({ userName: "BLIND", content: comment });
      setCommentArray(curArray);
      setComment("");
    }
  };
  const handleSubmitBtn = () => {
    if (comment === "") {
      alert("최소 1글자 이상 입력해주세요!");
    } else {
      const curArray = [...commentArray];
      curArray.push({ userName: "BLIND", content: comment });
      setCommentArray(curArray);
      setComment("");
    }
  };

  return (
    <article key={dataF.id}>
      <div className="articleHeader">
        <img
          className="justcode"
          alt="justcode"
          src="/images/sanghyeon/justcode.png"
        />
        <div>
          <p>{dataF.userName}</p>
          <p>{dataF.userSubName}</p>
        </div>
      </div>
      <img className="js" alt="js" src="/images/sanghyeon/js.png" />
      <div className="iconBox comment">
        {heartState ? (
          <img
            className="heart"
            src="/images/sanghyeon/heart.png"
            alt="heart"
            onClick={handleHeart}
          />
        ) : (
          <img
            className="heart"
            src="/images/sanghyeon/binheart.png"
            alt="heart"
            onClick={handleHeart}
          />
        )}
        <img
          alt="bubble"
          src="/images/sanghyeon/bubble.png"
          className="bubble"
        />
        <img
          alt="upload"
          src="/images/sanghyeon/upload.png"
          className="upload"
        />
      </div>
      <div className="heartCnt comment">
        <img src="/images/sanghyeon/me.jpeg" alt="me" />
        <span>{dataF.whoHeart[0]}</span> 님 외 <span>{dataF.heartCnt}</span>
        명이 좋아합니다.
      </div>
      <div className="contentsBox comment">
        <p>
          <span>{dataF.userName} </span>
          {dataF.content}
        </p>
        <p>10분전</p>
        <input
          className="tInput"
          type="text"
          placeholder="댓글달기..."
          onChange={(e) => {
            handleCommentInput(e);
          }}
          onKeyUp={(e) => {
            handleEnter(e);
          }}
          value={comment}
        />
        <input
          className="submitBtn"
          type="button"
          value="게시"
          onClick={handleSubmitBtn}
        />
        <div className="comments">
          <CommentList />
          {commentArray.map((data) => (
            <Comment data={data} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default Feed;
