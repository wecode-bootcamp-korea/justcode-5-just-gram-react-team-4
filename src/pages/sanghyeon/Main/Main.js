import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import Comment from "../Components/Comment";
import CommentList from "../Components/CommentList";
import FeedList from "../Components/FeedList";

function Main() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login-sanghyeon");
  };

  const exploreUrl =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png";
  const heartUrl =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
  const profileBtnUrl =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png";
  return (
    <body>
      <div className="navWrapper">
        <nav>
          <div className="title">
            <img alt="instagram" src="/images/sanghyeon/instagram.png" />
            &nbsp;| Justgram
          </div>
          <input type="text" placeholder="검색" />
          <div className="navBar">
            <img alt="explore" src={exploreUrl} />
            &nbsp;
            <img alt="heart" src={heartUrl} />
            &nbsp;
            <img alt="profileBtn" src={profileBtnUrl} />
          </div>
        </nav>
      </div>
      <div className="wrapper">
        <main>
          <div className="feeds">
            <FeedList />
          </div>
          <div className="main-right">
            <div className="innerRight">
              <div className="articleHeader">
                <img
                  className="justcode"
                  src="/images/sanghyeon/justcode.png"
                  alt="justcode"
                />
                <div>
                  <p>justcode_bootcamp</p>
                  <p>justCode - 저스트코드</p>
                </div>
              </div>
              <div className="storyBoard">
                <span>스토리</span>
                <span className="modo">모두 보기</span>
              </div>
              <p>...</p>
              <div className="storyBoard">
                <span>회원님을 위한 추천</span>
                <span className="modo">모두 보기</span>
              </div>
              <p>...</p>
              <div>
                <button className="loginBtn" onClick={goToLogin}>
                  로그인 페이지로
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default Main;
