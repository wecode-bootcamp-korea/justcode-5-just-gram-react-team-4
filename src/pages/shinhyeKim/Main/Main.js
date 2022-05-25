import React from 'react';
import './Main.scss';

function Main () {
  return  <div className="container">
    <header>
      <nav>
      <a className="logo_box">
        <img
          className="logo"
          src="/images/instagram.png"
          alt="인스타그램로고"
        />
        <span className="logo_text">Justgram</span>
      </a>

      <div className="input_box">
        <input className="search" type="search" placeholder="검색" />
      </div>

      <ul className="header_icons_box">
        <li className="header_icons">
          <button className="explore">
            <img
              src="/images/explore.png"
              alt="나침반"
            />
          </button>
        </li>
        <li className="header_icons">
          <button className="heart">
            <img
              src="/images/heart.png"
              alt="하트"
            />
          </button>
        </li>
        <li className="header_icons">
          <button className="my_page">
            <img
              src="/images/profile.png"
              alt="마이페이지"
            />
          </button>
        </li>
      </ul>
      </nav>
    </header>

    <main>
      <section>
        <article className="feed_container">
          <div className="writer">
            <a href="#" className="writer_id">
              <img
                className="writer_img"
                src="/images/writer.png"
                alt="작성자프로필"
              />
              cindy
            </a>
            <button className="triple_dot">・・・</button>
          </div>

          <div className="feed_img">
            <img
              className="feed_img"
              src="/images/postimg.png"
              alt="피드이미지"
            />
          </div>


          <div className="feed_contents">
            <div className="feed_icons">
              <span className="left_icons">
                <button className="like_btn">
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button className="comment_btn">
                  <img
                    className="comment_btn"
                    src="/instagram-comment.png"
                    alt="comment_icon"
                  />
                </button>
                <button className="share_btn">
                  <img
                    className="share_btn"
                    src="/images/instagram-share.png"
                    alt="share_icon"
                  />
                </button>
              </span>
              <span className="right_icon">
                <button className="bookmark_btn">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
              </span>
            </div>

            <div className="like_user">
              <a href="#" className="user_id"
                ><img
                  className="user_img"
                  src="/images/likespeople.png"
                  alt="user_img"
              />lywww</a>
              </div>님&nbsp;
              <span className="bold_text">외 10명</span>이 좋아합니다.
            </div>

            <div className="feed_text">
              <a className="writer_id">cindy</a>
              <span className="content">
                저스트코드 시작한지 벌써 2주나 되었다.
                거짓말거짓말거짓말거짓말거짓말거짓말</span
              >
              <button className="more_btn">더&nbsp;보기</button>
            </div>

            
            <div className="comment_box">
              <div className="comments">
                <a href="#" className="comment writer_id">lywww</a>
                <span className="comment_content">아자아자아자아자</span>
              </div>
            </div>

            <div className="posted_time">33분 전</div>
            <div className="comment_group"></div>
            <div className="write_comment">
              <input className="comment_input" type="text" placeholder="댓글 달기..." />
              <button className="write_comment_btn">게시</button>
            </div>
        </article>
      </section>
    </main>

    <aside>
      <div className="logged_user_box">
        <a href="#" className="logged_user_img">
          <img
            className="logged_in_user_img"
            src="/images/justcode.png"
            alt="logged_in_user"
          />
          </a>
        <a href="#">
          <div className="user_id">JUSTCODE</div>
          <div className="user_profile">저스트코드⎢위코드</div>
        </a>
      </div>

      <div className="story_box">
        <div className="story_box_header">
          <span className="story">스토리</span>
          <button>모두 보기</button>
        </div>

        <div className="story_group">
            <div className="story_user_id">
                <div className="profile_wrapper">
                  <div className="story_user">
                  <a href="#">
                  <img
                  className="profile_wrapper"
                  src="/images/circle.png"
                  alt="story_cercle" />
                  <img
                  className="story_user_img"
                  src="/images/couple.jpeg"
                  alt="user"
              /></a>
              </div>
              <div>
                  <a href="#"><div className="user_id">woony</div></a>
                  <div className="posted_time">3분 전</div>
                </div>
              </div>
            </div>

            <div className="story_user_id">
              <div className="profile_wrapper">
                <div className="story_user">
                <a href="#">
                <img
                className="profile_wrapper"
                src="/images/circle.png"
                alt="story_cercle" />
                <img
                className="story_user_img"
                src="/images/punch.png"
                alt="story_user_img"
            /></a>
            </div>
            <div>
                <a href="#"><div className="user_id">punch</div></a>
                <div className="posted_time">10분 전</div>
              </div>
            </div>
          </div>


          <div className="story_user_id">
            <div className="profile_wrapper">
              <div className="story_user">
              <a href="#">
              <img
              className="profile_wrapper"
              src="/images/circle.png"
              alt="story_cercle" />
              <img
              className="story_user_img"
              src="/images/kkao.png"
              alt="story_user_img"
          /></a>
          </div>
          <div>
              <a href="#"><div className="user_id">kkao</div></a>
              <div className="posted_time">30분 전</div>
            </div>
          </div>
        </div>

          <div className="story_user_id">
            <div className="profile_wrapper">
              <div className="story_user">
              <a href="#">
            <img
              className="profile_wrapper"
              src="/images/circle.png"
              alt="story_cercle" />
              <img
              className="story_user_img"
              src="/images/choonsik.png"
              alt="user"
          /></a>
          </div>
          <div>
              <a href="#"><div className="user_id">choonsik</div></a>
              <div className="posted_time">10시간 전</div>
            </div>
          </div>
        </div>
    </div>
  </div>

      <div className="recommend_box">
        <div className="recommend_box_header">
          <span className="recommend">회원님을 위한 추천</span>
          <button>모두보기</button>
        </div>

        <div className="recommend_group">
          <div className="recommend_user_list">
            <div className="recommend_user">
              <div>
              <a href="#">
                <img
                  className="user_img"
                  src="/images/ja.png"
                  alt="recommend_user"
                /></a>
              </div>
              <div>
                <a href="#"><div className="user_id">jjiiaaa</div></a>
                <div className="followers">jufeew님 외 2명이 팔로우합니다</div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="recommend_user">
              <div>
              <a href="#">
                <img
                className="user_img"
                src="/images/bride.png"
                alt="recommend_user"
              /></a>
              </div>
              <div>
              <a href="#"><div className="user_id">shongi</div></a>
              <div className="followers">hieni__님 외 6명이 팔로우합니다</div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="recommend_user">
              <div>
              <a href="#">
                <img
                  className="user_img"
                  src="/images/aurora.png"
                  alt="recommend_user"
                /></a>
              </div>
              <div>
              <a href="#"><div className="user_id">slikeyy</div></a>
              <div className="followers">cwn_bq님 외 5명이 팔로우합니다</div>
              </div>
              <button>팔로우</button>
            </div>
          </div>
        </div>
      </div>

      <div className="company_info_box">
        <div>
          <a href="#">소개 ・ </a><a href="#">도움말 ・ </a
          ><a href="#">홍보 센터 ・ </a><a href="#">API ・ </a
          ><a href="#">채용 정보 ・ </a> <br /><a href="#"
            >개인정보처리방침 ・ </a
          ><a href="#">약관 ・ </a><a href="#">위치 ・ </a
          ><a href="#">인기 계정 ・ </a><a href="#">해시태그 ・ </a
          ><a href="#">언어</a>
        </div>
        <div>©️ 2022 JUSTGRAM</div>
      </div>
    </aside>
  </div>

};

export default Main;
