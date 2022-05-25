
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss"
import Comment from "../Components/Comment";


function Main() {

    const navigate = useNavigate();
  
    const goToLogin = () => {
      navigate("/login-sanghyeon");
    };

    const [comment, setComment] = useState('');
    const [commentArray, setCommentArray] = useState([
      { id: '' , text: comment },
    ]);

    const handleCommentInput = e => {
        setComment(e.target.value);
    };
    const handleEnter = e => {
        if (e.key === "Enter" && e.target.value !== "") {
            e.preventDefault();
            const curArray = [...commentArray];
            curArray.push({ id: "BLIND" , text: comment });
            setCommentArray(curArray);
            setComment("");
        }
    };
    const handleSubmitBtn = () =>{
        if (comment===""){
            alert("최소 1글자 이상 입력해주세요!")
        }
        else{
            const curArray = [...commentArray];
            curArray.push({ id: "BLIND" , text: comment });
            setCommentArray(curArray);
            setComment("");
    
        };

    };

    const exploreUrl="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png";
    const heartUrl="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    const profileBtnUrl="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png";
    return (
        <body>
            <div className="navWrapper">
                <nav>
                    <div className="title">
                        <img alt="instagram" src="/images/sanghyeon/instagram.png"/>
                        &nbsp;| Justgram
                    </div>
                    <input type="text" placeholder="검색"/>
                    <div className="navBar">
                        <img alt="explore" src={exploreUrl}/>&nbsp;
                        <img alt="heart" src={heartUrl}/>&nbsp;
                        <img alt="profileBtn" src={profileBtnUrl}/>
                    </div>
                </nav>
            </div>
            <div className="wrapper">
                <main>
                    <div className="feeds">
                        <article>
                            <div className="articleHeader">
                                <img className="justcode" alt="justcode" src="/images/sanghyeon/justcode.png"/>
                                <div>
                                    <p>justcode_bootcamp</p>
                                    <p>just - 저스크코드</p>
                                </div>
                            </div>
                            <img className="js" alt="js" src="/images/sanghyeon/js.png"/>
                            <div className="iconBox comment">
                                <img className="heart" src="/images/sanghyeon/heart.png" alt="heart"/>
                                <img alt="bubble" src="/images/sanghyeon/bubble.png"/>
                                <img alt="upload" src="/images/sanghyeon/upload.png"/>
                            </div>
                            <div className="heartCnt comment">
                                <img src="/images/sanghyeon/me.jpeg" alt="me"/>
                                sanghyeon111님 외 30명이 좋아합니다.
                            </div>
                            <div className="contentsBox comment">
                                <p><span>justcode_bootcamp</span>"2022년, 개발자가 되기로 결심했다면 1,300명 이상 비전공자 개발자를 배출한 저스트코드와 함께...</p>
                                <p>10분전</p>
                                <input className="tInput" type="text" placeholder="댓글달기..." 
                                onChange={e=>{handleCommentInput(e);}}
                                onKeyUp={e=>{
                                    handleEnter(e);
                                }}
                                value={comment}
                                />
                                <input className="submitBtn" type="button" value="게시" onClick={handleSubmitBtn}/>
                                <div className="comments">
                                    {commentArray.map(data => (
                                        <Comment data={data}/>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="main-right">
                        <div className="innerRight">
                            <div className="articleHeader">
                                <img className="justcode" src="/images/sanghyeon/justcode.png" alt="justcode"/>
                                <div>
                                    <p>
                                        justcode_bootcamp
                                    </p>
                                    <p>
                                        justCode - 저스트코드
                                    </p>
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