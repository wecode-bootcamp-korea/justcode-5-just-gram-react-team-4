import React from 'react';

function Comment({name,comment}){
    return (<li className="comment">
    <div>
        <span className="commentSpace"><b>{name}</b></span>
        <span>{comment}</span>
    </div>
<img className="likeIt"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
</li>)
}

export default Comment;