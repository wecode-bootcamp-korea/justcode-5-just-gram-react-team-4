import './Main.scss'
import React, {useState, useEffect} from 'react'
import Comment from './Comment'
import CommentList from './CommentList'

function MainsangbinYim() {
 const [comment, setComment] = useState('')
 
 
 const inputComment = e => setComment(e.target.value)
 
 const [savedComments,setSavedComments] = useState([{ id : ' ' , comment : comment}])
 
 const submit = e => {
     e.preventDefault();
     if(e.key === 'Enter'&& comment !== ' '){
         e.preventDefault();
         const repoArray = [...savedComments];
         repoArray.push({ num:1, id : 'Bin ' , comment : comment}); 
         setSavedComments(repoArray);
         setComment(" ")       
     }
 }
 const click = () => {
     if(comment === " ")
     {return alert("댓글을 입력해주세요")}
     else{
    const repoArray = [...savedComments];
    repoArray.push({num:2, id : 'Sang ' , comment : comment}); 
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
   
return (
      <div className="Main">
        <nav>
            <div className="logo">
                <div className="home">
                    <img className="homeImg" alt='homepage' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABYxJREFUaEPtmVeoXkUQx3+xxW7sir2hIHbFgr2hsffesDwoioJgRUVR8MEHwYI11lghsYG9ImKv+KBgVyzYK3Z+YTZsvnvKnpMvkeAduJxz7s7szn93ZnZmvjHM4jRmFtefUQD/9Qn+r09gEcC/hePp+wJxInNk7+mQfgZ+jw/fvwW+ib/0/lfXEy09gdmAA4GDgA2AJYDZuy7Wwv8P8DnwCjARuB34u22NEgCrAHcD67ZNNuTxV4F9gfea5m0DoPLPAYtXTPJ9hRn8CPwZvJpFTpqXpiXNn5ldMkWfg/QVsEkTiCYAmshL2c7/ClwE3Aa8X3K8HU/E9VYEDgFOB+YJeU1qo7r1mgAcDNwak/wCbB+n0VGvXuybAo9lIPQ9fWIENQG4H9glJM4BLuilSn+hc4HzQvxeYI+uAD4Dlg4hfaHRmfrrOUVS0zwJuBQ4K+ZaFXg33tVlmS4AtEdjtuHTUDYX0DlGdwCl8+vYPhcMOR1eHbQS11aHEWG1zoS8nLxkJKPNuA7K9GG9MDuBs7MJfsguRHVQl2moDoDRwEgjfQws30GrpYDDgG0ATW9u4EvgReAO4KkOc30ELBf8KwB+FwFYB3gtON8C1ipY1LCn450Sx10l4m1rhHm+YD5Z3sjWVie/iwBsme3Us8DmLQsuChi1vHTaaEfgkTamGH8mW1ud/C4CsCtwX3A+COzcsKDO9jiwRcbzNHB1mI13yMrA1mGOEwqVl00d1EXaLTapCMA+kf/IPBnYq2HRMyIMymIacUIo36anwI083zUw3hX5kCz7ZTpNFalzYjNPUwbJSfavWcSQp2MtFOMnRyxvU15+05SVgKOBG2sEzEq9hSUzg6RTKwCjyE3BpZDCVWTecksM6GDrFeZI+lSy5zeBtWvmF9jhMXZkFdC6EzgKuD4EBXJEzQJXAcfF2KnAJW1bH+PzAV8DY+PbTHQwe3XoGuCY4DkWuHZw/joAKqVy0nXZJIPyDwM7xD99PloIQDbD85rB78mlsJ1PcTlwfPxD37qiFIBojSKSJ6GdVlEOYFvgiQ4AXs9MxyrPtHmQegMoNaHcRt2pKwsBGIGMPpqS5O39RYVsbkJahd/TUJ0JHQrcHJxNTuyxXhZ8pgjG+hLaE5gUjGa5phxVdEPmf52c+ICsgLAeNgZX0ZJxOc0Zg3tnitUBmRd4GVgjGEylUwo9KGNBlSKgEc+wWnQC+UV2D+CO1ZEn4ElIpsO7A0/WMFsX3wnsFONmlwKxG1FF+UXmXeR3EYDxwAPB+VC2YNUipt4vABYgkrex4c4o5t1gDr9YbMKZcXmlefQ1zaSOrMRMISQrMr+LAOQXjV2JzRoWcWh1wIg0mHbbCPgjK1LSNGalZq5tZao5VcqxtgL8LgJg+pxS17ezeN2Ew2aXiZqn10Say4lVeU2FUJ5O25cy9BYBcCc/DM5PsqKiRbcpw+6YN7dp87JREtpKtAbQn7wY/S4hdUinapGVdJoqWxdGTbZSlpjXqSWL5jxGJ9OFn7oKBr9OnmpkfW1E5loHwGLegtriXntVkRlZ1FfhK2osNPWFZmZbpQrAasA7MfBpmOMIviYAeQgzYpzf0wz6itnUcl2pV2PLQiLdfIbD7WZia9GwbWab+qMWWHY0Op2AfmArZP2QEsTFUcB8MAN8Qpu3QjMPOy3aMS6tDjYLKn8raGuvW4x7kRnjc9Kx068rPi1OfFrAS0YLebyVVcx18l9tTClSW92Ohn+pLM3XsZ+0MeCGVVIbAIXcFfOXDfsac085a2bzn9Rg6w1AQc3JyfQLgdj0LQHfRXdNxFtaxfU9E7eh/MRUpYRmkf+ykt51OoGlXqptRem3eKZfcPzOTS+ZYKvCg8oMexe77PhQeEcBDGUbp2OS0ROYjs0biui/9GAYQAZMbCMAAAAASUVORK5CYII="/> 
                </div>
            <div className="name">justgram</div>
            </div>
            <div className="searchOutLine">
                <input className="searchBar" type="text" placeholder="검색"/>
                <img className= "searchImg" alt="search" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCFJREFUaEPt2VWI9FUYx/HPa2E3WKjYLfaFKIIoYnshYuCF2GCL2CiYCGJeGJiod4J9Y4EtdmOgKAZidwc/OSOvw+zsOf+ZXXbBB5Zldp/znPM98dTMMctlzixfv3ECLIxFMT++xzfTsTmjACyN3bAntsTKfQv+Gq/gXtyBN6cCqAvAOjgXe2G+uRb1Cb7ErwjciuU0eiov4UzcPU6QFoAlcCEOKQvPYu/BnXgA3/YtLFcpJ7NHgQ145FEcjQCNLLUAa+AurI8fcCXOH7DoYQvaAZdgQ/yMQ3HLqAQ1ANuWO5xr8SAOwKcdJ86pnFGuUkychXM62vpn2GQAq+NpLItrcBR+G2XCMnZv3IhFcASu7mpzGMDieAIb4Aoc03WSCcbtiPvwF3bCw13sDwO4tjzY+7ELfu8ywSRjsimX4UOsjZ9a55gIII/15RKQ1sTnrYYb9BMnskGnFi/XMHTiN5DAkwB1Gi5ostiuvBFewHeIt4t7rpZBJ7AcPi67vhp+rLbWXfFmHIjjcWmLmUEA8c/xOHkDh7UYG0E3rvoRPImtW+wMAkh03bXkObmf0yHzlBNfDMu0BMhBAJ9hKcRYs1cYgbb3mHMaj9Xa6QdYEl/h3fKgau2MQ+9inICDSpCrstkPkEebxT+DraosjE8pHu+8ApGcqUr6AdbCW10eU9Vsw5VOwkU4ufyuMtkPsEJxoa+VrLHKyJiUktQl0TsSV9Xa7AeYt0TfP8ojTp4yXXIr9i8eMDlSlQzyQs9jUyRCvlplZTxKb2BdJAN+r9bkIICUi6eX48yjmg5JPf1B+Vm1ZcJBAFsUL/RsKQlb7HXVzcNNuZpKL+VmtQwCyN/eKUeZnD317lRKWjFvIzlYNi9XuFomSqeTWCXBSuG9Gf6sttiueHYpLW9HKrUmmQgguclz2ATH4vImq/XKqTtSsi5Y3HZz72hYRbYNHip1885TcJWStGXxqQFScyQSN8tkRf3hJaikyEiG+lTzDIMHpMORflI2KWn09kjsaZbJAGIwBUau0bh6OeuVHlNK1S+QnurupWUzJQAxGjeXRlbexm0lRlQHm7KqLPQ4nFKifPz+KuV/qfrSwUvfqUlqTqBnMLt0Qyk4fikV23V4cZIZl8d+OBErlatyE/Ytu98bHojMkXdXLS0AMZr+aHYwV2qhMstHeLx0n3Ml0vhKQZTUfHNsXE4u6mnsZvzrSOGSnCdxYG6IppNoBehNlM7zwdinImtNGzJ91esHOIGRIboCzH3EiaCJF2lMpQxdoLRI3kfS8iRpw2QkiHEAVN/XIYqdIWYKQNg6QcwkgE4QMw2gGWImAjRBzFSAaoiZDBCIJHkJfklDepLkb7veh5kO0H8SacPny8J/W/CzAaAHkQZDvpv+z/cHswVgwhj4P8A48ohRbPwNuq7MMXFy20gAAAAASUVORK5CYII="/>
            </div>
            <div className = "rightBar">
                <img className ="emo" alt="탐색" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                <img className ="emo" alt="하트" src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                <img className="emo" alt="마이페이지" src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
            </div>
        </nav>
        <main>
            <div className = "feeds">
                <article className = "article">
                    <div>
                        <img className="profile_img" alt="pic" src="https://images.unsplash.com/photo-1652981989753-80fa3d31202f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"/>   
                        <span className="profile_name">canon_mj</span>
                        <img className="dots" alt="dots" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAwRJREFUaEPtlk1IVFEUx//nTkJliyA/SiiEpCjcRRgtyjalM0Eu5k0ZShA0M1qLNlruZhUpLVpIzbiQvgybZzELZ8aixbSobF8SBLmI0uwDoy9R5514gjLzfDM3eT1CuLM995x7/v/fuecNYZX/aJX3DyXgfxNUBBQBhw6oEXJooON0RcCxhQ4LKAIODXScrgg4ttBhAUXAoYGO0xUBxxY6LFCUgE9r8xmUbSGmagZPEXsSvz5X3s5kIvPF7j2qBbcZoHMMqjPPEWF0XojeR4PX3hXL2xMMllRMi1awcYxAFWAaNwTfGYnHUoXybAVEIhEx+urDDQHRak00gGdr59b6Eomr03ZFGwIhrzBEHMSluXEC/2BAS+mxEbu8pqbzG2dLfqcB2meNM+NmXe3m05FIxLDGbAV4/aEuEF0q6BZBT8WjAWt8wXn2jFmbXzxnipjzeHbbkfBpYZ0Bf6E7mXEhPRTtkQqor4+sWVc+MUmgTUVwM2WpJvng+tvcM14t1ANQR7ExYebu9FDsYu6ZI1p7jQfGG8lz+FSKL1t0Xc/mk7VkNWhtOwX4textEaM5ORQdzD3XqIWfEHCgqAAgk9ajh/KFt50EeEB2pzB4x/D9WJ7QZSPkRIBXC2cAHFyxgECoGUx3/4mAhREqm5wgQtmKRygQ7gajU9LI5ZQe7cojdzy4nQxhOltkK/JUKb5WSUfILNzoD3cSobvggyJjMB3va7bGD59o31qSzY4xaINdLgPfPcCuYT363hpv8IfvCcKyxbC0AIg7kvHYFekjNg+Ya/TFy8l+IpyyaeTpLAzfY73vm12TXi3UQIBuFWE2LwhaMh59aJdnrtGZkpmkAPYva5KN/r21VWf+eo0uFmj0tzUSuJUJ1QT+SCQSP6cqB2QfMpOEZz57lmhppz8XQK+d87nNmuO7vnyyxQCaCKggYJwItwqJNnPVfyHZ5nA7rgi47bCsviIgc8jtuCLgtsOy+oqAzCG344qA2w7L6isCMofcjisCbjssq68IyBxyO77qCfwB9jUEQN1FkmoAAAAASUVORK5CYII="/>
                    </div>
                    <div>
                        <img className="feeds_img"alt="feed" src="https://images.unsplash.com/photo-1652841821713-744dffbdef38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720"/> 
                    </div>
                    <div className="emoji_line">
                        <img className="emoji"alt="emoji" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className="emoji"alt="emoji" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/speech_bubble-256.png"/>
                        <img className="emoji"alt="emoji" src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-128.png"/>
                        <img className="save"alt="emoji" src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/bookmark_ribbon_save_web_label-128.png"/>
                    </div>
                    <div>
                        <img className="likeline_img" alt="good" src="https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400"/>
                        <span className="likeline_font">aineword님 외 10명이 좋아합니다.</span>
                    </div>
                    <div className="message">
                    {commentList.map(commentList => <CommentList key={commentList.id} name={commentList.userName} comment={commentList.content}/>)}
                    {savedComments.map(savedComments=>(<Comment key={savedComments.num} id={savedComments.id}comment={savedComments.comment}/>))}
                        <img className="emoji_heart" alt="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/></div>
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
            </div>
            <div className="main-right">
                <div className="wecodeIdDiv">
                    <img className="main-right-img" alt="pictur" src="https://media.istockphoto.com/photos/search-hacked-warning-on-laptop-concept-of-privacy-data-being-hacked-picture-id1320155542?s=612x612"/>
                    <div className="wecodenickname">
                        <span className="font-bold">wecode_bootcamp</span>
                        <span className="font-grey">Wecode | 위코드</span>
                    </div>
                </div>
                <div className="story-div">
                    <div className="text">
                        <span className="font-grey">스토리</span>
                        <span className="all-looking">모두 보기</span>
                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                            <span>yum_s</span><span className="font-grey">16분 전</span>        
                        </div>
                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                        <span>yum_s</span><span className="font-grey">16분 전</span>        
                        </div>
                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                        <span>yum_s</span><span className="font-grey">16분 전</span>        
                        </div>
                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                        <span>yum_s</span><span className="font-grey">16분 전</span>        
                        </div>
                    </div>
                </div>
                <div className="reco">
                    <div className="text">
                        <span className="font-grey">회원님을 위한 추천</span>
                        <span className="all-looking">모두 보기</span>
                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                            <span>yum_s</span><span className="font-grey">16분 전</span>   
                        </div>
                        <div className="follow">팔로우</div>
                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                            <span>yum_s</span><span className="font-grey">16분 전</span>        
                        </div>
                        <div className="follow">팔로우</div>

                    </div>
                    <div className="yum">
                        <img className="yumsimg"alt="yum_s" src="https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                        <div className="yum_div">
                            <span>yum_s</span><span className="font-grey">16분 전</span>        
                        </div>
                        <div className="follow">팔로우</div>
                    </div>
                </div>
                <div>
                    <span className="font-grey">justgram 정보 지원 홍보 센터 api 채용 정보 개인정보처리방침 약관 디렉터리 프로필 해시태그 언어<br/><br/>@2019 justgram</span>
                </div>
            </div>    
        </main>  
      </div>
    );
  }
  
  export default MainsangbinYim;