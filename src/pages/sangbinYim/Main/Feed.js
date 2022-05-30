import React from "react"
import CommentList from "./CommentList";
import Comment from "./Comment";
import {useState, useEffect} from 'react'


function Feed(props) {
    const [comment, setComment] = useState('')
 
 
    const inputComment = e => setComment(e.target.value)
    
    const [savedComments,setSavedComments] = useState([{ id : ' ' , comment : comment}])
    
    const submit = e => {
        e.preventDefault();
        if(e.key === 'Enter'&& comment !== ' '){
            e.preventDefault();
            const repoArray = [...savedComments];
            repoArray.push({  id : 'Bin ' , comment : comment}); 
            setSavedComments(repoArray);
            setComment(" ")       
        }
    }
    const click = () => {
        if(comment === " ")
        {return alert("댓글을 입력해주세요")}
        else{
       const repoArray = [...savedComments];
       repoArray.push({ id : 'Sang ' , comment : comment}); 
       setSavedComments(repoArray);
       setComment(" ")
       }}
   
   const [commentList, setCommentList]= useState([]);
   
   useEffect(() => {
       fetch('http://localhost:3000/data/commentData.json')
       .then(res => res.json())
       .then(data => { console.log(data); 
           setCommentList(data);});
   },[])
   

    return(
<article className = "article">
                    <div className="profile_div">
                        <img className="profile_img" alt="pic" src={props.profileImg}/>   
                        <span className="profile_name">{props.writer}</span>
                        <img className="dots" alt="dots" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwRJREFUaEPtlk1IVFEUx//nTkJliyA/SiiEpCjcRRgtyjalM0Eu5k0ZShA0M1qLNlruZhUpLVpIzbiQvgybZzELZ8aixbSobF8SBLmI0uwDoy9R5514gjLzfDM3eT1CuLM995x7/v/fuecNYZX/aJX3DyXgfxNUBBQBhw6oEXJooON0RcCxhQ4LKAIODXScrgg4ttBhAUXAoYGO0xUBxxY6LFCUgE9r8xmUbSGmagZPEXsSvz5X3s5kIvPF7j2qBbcZoHMMqjPPEWF0XojeR4PX3hXL2xMMllRMi1awcYxAFWAaNwTfGYnHUoXybAVEIhEx+urDDQHRak00gGdr59b6Eomr03ZFGwIhrzBEHMSluXEC/2BAS+mxEbu8pqbzG2dLfqcB2meNM+NmXe3m05FIxLDGbAV4/aEuEF0q6BZBT8WjAWt8wXn2jFmbXzxnipjzeHbbkfBpYZ0Bf6E7mXEhPRTtkQqor4+sWVc+MUmgTUVwM2WpJvng+tvcM14t1ANQR7ExYebu9FDsYu6ZI1p7jQfGG8lz+FSKL1t0Xc/mk7VkNWhtOwX4textEaM5ORQdzD3XqIWfEHCgqAAgk9ajh/KFt50EeEB2pzB4x/D9WJ7QZSPkRIBXC2cAHFyxgECoGUx3/4mAhREqm5wgQtmKRygQ7gajU9LI5ZQe7cojdzy4nQxhOltkK/JUKb5WSUfILNzoD3cSobvggyJjMB3va7bGD59o31qSzY4xaINdLgPfPcCuYT363hpv8IfvCcKyxbC0AIg7kvHYFekjNg+Ya/TFy8l+IpyyaeTpLAzfY73vm12TXi3UQIBuFWE2LwhaMh59aJdnrtGZkpmkAPYva5KN/r21VWf+eo0uFmj0tzUSuJUJ1QT+SCQSP6cqB2QfMpOEZz57lmhppz8XQK+d87nNmuO7vnyyxQCaCKggYJwItwqJNnPVfyHZ5nA7rgi47bCsviIgc8jtuCLgtsOy+oqAzCG344qA2w7L6isCMofcjisCbjssq68IyBxyO77qCfwB9jUEQN1FkmoAAAAASUVORK5CYII="/>
                    </div>
                    <div>
                        <img className="feeds_img"alt="feed" src={props.feedImg}/> 
                    </div>
                    <div className="emoji_line">
                        <img className="emoji"alt="emoji" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className="emoji"alt="emoji" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/speech_bubble-256.png"/>
                        <img className="emoji"alt="emoji" src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-128.png"/>
                        <img className="save"alt="emoji" src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/bookmark_ribbon_save_web_label-128.png"/>
                    </div>
                    <div>
                        <img className="likeline_img" alt="good" src="https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400"/>
                        <span className="likeline_font">{props.likedUsername}님 외 10명이 좋아합니다.</span>
                    </div>
                    <div className="message">
                    {commentList.map(commentList => <CommentList key={commentList.id} name={commentList.userName} comment={commentList.content}/>)}
                    {savedComments.map(savedComments=>(<Comment key={savedComments.id} id={savedComments.id}comment={savedComments.comment}/>))}
                    </div>   
                    <div className="comment">
                        <input 
                        onChange={inputComment}
                        className="comment-input"  
                        type="text" 
                        placeholder="댓글 달기"
                        onKeyPress={submit}
                        value={comment}
                        />
                        <button className="posting" onClick={click}>게시</button>
                    </div>
</article>
    )
}

export default Feed;