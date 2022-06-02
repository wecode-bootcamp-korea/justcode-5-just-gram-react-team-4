import React from 'react';
import "./Nav.scss";


function Nav(){
    return(
        <nav>
            <img className="main-logo" src="../images/sungheeKim/instagram.png" alt="main-logo"/>
            <span className="main-text">Justgram</span>
            <div className="search-box">
                <input className="search-box"type="text" placeholder="검색"/>
            </div>
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
            <img className="newHeart"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
        </nav>        
    )
}
        

export default Nav;