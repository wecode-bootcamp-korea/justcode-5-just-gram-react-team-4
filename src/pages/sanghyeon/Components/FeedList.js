import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

function FeedList() {
  const [feeedList, setfeedList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json", {
      method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setfeedList(data);
      });
  }, []);

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
    <>
      {feeedList.map((data) => {
        {
          console.log(data.id);
        }
        <article key={data.id}>
          <div className="articleHeader">
            <img
              className="justcode"
              alt="justcode"
              src="/images/sanghyeon/justcode.png"
            />
            <div>
              <p>{data.userName}</p>
              <p>{data.userSubName}</p>
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
            <span>{data.whoHeart}</span> 님 외 <span>{data.heartCnt}</span>이
            좋아합니다.
          </div>
          <div className="contentsBox comment">
            <p>
              <span>{data.userName}</span>
              {data.content}
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
        </article>;
      })}
    </>
  );
}
export default FeedList;
