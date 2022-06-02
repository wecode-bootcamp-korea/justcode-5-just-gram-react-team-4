import React from "react";
import { useNavigate } from "react-router-dom";

function MainRight() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login-sanghyeon");
  };

  return (
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
  );
}

export default MainRight;
