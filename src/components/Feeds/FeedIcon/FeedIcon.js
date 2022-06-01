import React from "react";
import "./FeedIcon.scss";
import {useState} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeedIcon(){
    

    
    const[likeHeart,setLikeHeart]=useState(false);
    const[heartColor,setHeartColor]=useState(true);

    function handleLikeButton(){
        setLikeHeart(!likeHeart);
        changeHeartColor();
    }

    function changeHeartColor(){
        //setHeartColor(!heartColor);
    }
    
    return(
        <div className="feed-icon">
            <button onClick={handleLikeButton}><img id="red-heart"src="../images/sungheeKim/heart.png" alt="red-heart"/></button>
            <img id="chat-icon" src="../images/sungheeKim/chat.png"/>
            <img src="../images/sungheeKim/upload.png" alt="share"/>
            <img className="save-icon" src="../images/sungheeKim/save-instagram.png" alt="save"/>
        </div>
    )
}

export default FeedIcon;