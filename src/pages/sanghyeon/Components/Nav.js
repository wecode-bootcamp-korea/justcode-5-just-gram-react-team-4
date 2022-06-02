import React from "react";
import "./Nav.scss";

function Nav() {
  const exploreUrl =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png";
  const heartUrl =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
  const profileBtnUrl =
    "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png";

  return (
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
  );
}

export default Nav;
