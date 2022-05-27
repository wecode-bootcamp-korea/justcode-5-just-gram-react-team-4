import { useState } from "react";
import "./Main.scss";

function Comment({comment}){
    return (<div className="comment">
    <div>
        <span className="commentSpace"><b>{comment.id}</b></span>
        <span>{comment.comment}</span>
    </div>
<img className="likeIt"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
</div>)
}


function Main() {

  const [comments,setComments]=useState([
      {
          id:'noelle',
          comment:'I love mommy'
      },
      {
        id:'roykim',
        comment:'I love daddy' 
      }
  ]);

  const [commentInputValue,setCommentInputValue]=useState('');
  const [addCommentButtonDisabled,setAddCommentButtonDisabled]=useState(true);

  function handleCommentInput(event){
      setCommentInputValue(event.target.value);
      if(event.target.value.length>0){
          setAddCommentButtonDisabled(false);
      }else{
          setAddCommentButtonDisabled(true);
      }
  }
 function handleCommentInputKeyDown(event){
    if(event.key==="Enter"){
        handleCommentButtonClick();
    }
 }

  function handleCommentButtonClick(){
    const commentToAdd={
        id:'empty',
        comment:commentInputValue
        
    }
    setComments([...comments,commentToAdd]);
    setAddCommentButtonDisabled(true);
    setCommentInputValue('');
  }
  

    return (
      <div className="container">
            <nav>
                <img className="main-logo" src="/images/sungheekim/instagram.png" alt="main-logo"/>
                <span className="main-text">Justgram</span>
                <div className="search-box">
                    <input className="search-box"type="text" placeholder="검색"/>
                </div>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                <img className="newHeart"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
            </nav>
            <main>
                <div className="feed-box">
                    <div className="article-header">
                        <img className="author-img" src="/images/sungheekim/justcode.png"/>
                        <div className="id-location">
                            <span className="identify">wecode_bootcamp</span>
                            <span className="location">weCode-위코드</span>
                        </div>
                        <img className="moreOption" src="/images/sungheekim/option.png"/>
                    </div>
                    
                    <img className="new-photo" src="/images/sungheekim/familyPic.jpg" alt="new-photo"/>
                    
                    <div className="feed-icon">
                        <img id="red-heart"src="/images/sungheekim/heart.png" alt="red-heart"/>
                        <img id="chat-icon" src="/images/sungheekim/chat.png"/>
                        <img src="/images/sungheekim/upload.png" alt="share"/>
                        <img className="save-icon" src="/images/sungheekim/save-instagram.png" alt="save"/>
                    </div>
                    
                    <div className="feeds-footer">
                            <div className="howManyLikes">
                                <img className="people" src="/images/sungheekim/sungheekim/logan.jpg"/>
                                <span><b>aineworld</b>님 <b>외 10명</b>이 좋아합니다</span>
                            </div>
                            <span id="description"><b>canon_mj</b> 위워크에서 진행한 베이킹 클래스...<span style={{color: "rgb(200, 203, 206)"}}>더 보기</span></span>
                            <div className="comments">
                            {
                                    comments.map((comment, index) =>{
                                        return <Comment comment={comment} key={index}/>
                                    })
                                }
                             </div>
                            <span className="minutes" style={{color: "rgb(147, 150, 153)"}}>42분전</span> 
                            <div className="addingCommentList">
                                <input id="addComment" value={commentInputValue} onChange={handleCommentInput} onKeyDown={handleCommentInputKeyDown} className="addComment" type="text"placeholder="댓글 달기..."/>
                                <button disabled={addCommentButtonDisabled} onClick={handleCommentButtonClick} className="upload-btn">게시</button>
                            </div>
                       </div>
                </div>

                <div className="main-right">
                    <div className="profile-box">
                        <img className="profile-img" src="/images/sungheekim/justcode.png"/>
                        <div className="id-location">
                            <span className="identify">wecode_bootcamp</span>
                            <span className="location">weCode-위코드</span>
                        </div>
                    </div>
                    <div className="story-box">
                        <div className="story-box-header">
                            <span>스토리</span>
                            <span style={{color: "black"}}>모두보기</span>
                        </div>
                        <div className="story-box-content">
                            <div className="story1">
                                <img src="/images/sungheekim/kim.jpg"/>
                                <div className="story-id">
                                    <span className="identify">mariesunghee</span>
                                    <span className="recent">13분 전</span>
                                </div>
                            </div>
                            <div className="story1 center-img">
                                <img src="/images/sungheekim/logan.jpg"/>
                                <div className="story-id">
                                    <span className="identify">ilovenoelle</span>
                                    <span className="recent">2시간 전</span>
                                </div>
                            </div>
                            <div className="story1">
                                <img src="/images/sungheekim/marie.jpg"/>
                                <div className="story-id">
                                    <span className="identify">positive_happy_mom</span>
                                    <span className="recent">1시간 전</span>
                                </div>
                            </div>   
                        </div>
                    </div> 

                    <div className="recommend-box">
                        <div className="recommend-box-header">
                            <span>회원님을 위한 추천</span>
                            <span style={{color: "black"}}>모두보기</span>
                        </div>
                        <div className="recommend-box-content">
                            <div className="story1">
                                <img src="/images/sungheekim/logankim.jpg"/>
                                <div className="story-id">
                                    <span className="identify">baekstage</span>
                                    <span className="recent">회원님을 위한 추천</span>
                                </div>
                                <span className="follow">팔로우</span>
                            </div>
                            <div className="story1 center-img">
                                <img src="/images/sungheekim/roy.jpg"/>
                                <div className="story-id">
                                    <span className="identify">frontend</span>
                                    <span className="recent">회원님을 위한 추천</span>
                                </div>
                                <span className="follow">팔로우</span>
                            </div> 
                            <div className="story1">
                                <img src="/images/sungheekim/noel.jpg"/>
                                <div className="story-id">
                                    <span className="identify">wannabeadeveloper</span>
                                    <span className="recent">forntend님이 팔로우합니다</span>
                                </div>
                                <span className="follow">팔로우</span>
                            </div>        
                        </div>
                    </div>
                    
                    
                    <div className="companyInfo-box">
                        <p>소개도움말홍보 센터API채용<br/>
                        정보개인정보처리방침약관위치인기 계정해시태그<br/>
                        언어</p>
                        <span>© 2022 INSTAGRAM FROM META</span>    
                        </div>
                
                </div>

            </main>
            
        </div>
    );
  }
  
  export default Main;
  