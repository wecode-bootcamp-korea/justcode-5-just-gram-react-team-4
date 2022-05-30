import React from "react";
import "./Main.scss";

function MainJulie() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-box">
          <i className="fa-brands fa-instagram"></i> &nbsp;&nbsp;
          <div className="justgram">| Justgram</div>
        </div>
        <input className="search" type="text" placeholder="검색" />
        <div className="menu_box">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="compess"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="user"
          />
        </div>
      </div>

      <div className="content">
        <div className="feed-group">
          <div className="feed-container">
            <div className="feed_header">
              <div>
                <i className="fa-solid fa-face-smile-beam"></i> canon_mj
              </div>
              <button>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
            <div className="feed_image">
              <img
                className="feed_photo"
                alt="feed_image"
                src="/images/julieLee/bom.jpg"
              ></img>
            </div>
            <div className="feed_contents">
              <div className="button_group">
                <div>
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-regular fa-comment"></i>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div className="like_sentence">
                <i className="fa-solid fa-face-smile-beam"></i>
                <span>aineworld</span>님<span>외 10명</span>이 좋아합니다.
              </div>
              <div className="comment_group">
                <div className="comment_box">
                  <span>canon_mj</span> 위워크에서 진행한 베이킹 클래스
                </div>
                <div>42분전</div>
              </div>
              <div className="who_wrote"></div>
              <div className="post_comment_box">
                <input
                  className="post_comment_type"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="post_btn">게시</button>
              </div>
            </div>
          </div>
        </div>
        <div className="floating_section">
          <div className="profile_box">
            <i className="fa-solid fa-face-smile-beam"></i>
            <a href="#">
              <div>wecode_bootcamp</div>
            </a>
            <div>WeCode | 위코드</div>
          </div>
          <div className="story_box">
            <div className="story-header">
              <div>스토리</div>
              <button>모두보기</button>
            </div>
            <div className="story-group">
              <i className="fa-solid fa-face-smile-beam"></i>
              <div>joaaaaabyy</div>
              <div>16분전</div>

              <i className="fa-solid fa-face-smile-beam"></i>
              <div>joaaaaabyy</div>
              <div>16분전</div>

              <i className="fa-solid fa-face-smile-beam"></i>
              <div>joaaaaabyy</div>
              <div>16분전</div>
            </div>
          </div>
          <div className="recommend_box">
            <div className="recommend-header">
              <div>회원님을 위한 추천</div>
              <button>모두보기</button>
            </div>
            <div className="story-group">
              <div className="story-id">
                <i className="fa-solid fa-face-smile-beam"></i>
                <div>joaaaaabyy</div>
                <div>legend_a님 외 2명이</div>
              </div>
              <div className="story-follow">
                <button>팔로우</button>
              </div>

              <div className="story-id">
                <i className="fa-solid fa-face-smile-beam"></i>
                <div>joaaaaabyy</div>
                <div>legend_a님 외 2명이</div>
              </div>
              <div className="story-follow">
                <button>팔로우</button>
              </div>

              <div className="story-id">
                <i className="fa-solid fa-face-smile-beam"></i>
                <div>joaaaaabyy</div>
                <div>legend_a님 외 2명이</div>
              </div>
              <div className="story-follow">
                <button>팔로우</button>
              </div>
            </div>
          </div>
          <div className="company_info_box">
            <div>
              <a href="">Justgram정보</a>
              <a href="">홍보</a>
              <a href="">센터</a>
            </div>
            <div>2019 Justgram</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainJulie;
