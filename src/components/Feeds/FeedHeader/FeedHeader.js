import React from 'react';
import "./FeedHeader.scss";


function FeedHeader({identify,location,authorImg}){
    return(
        <div className="feed-header">
            <img className="author-img" src={authorImg}/>
            <div className="id-location">
                <span className="identify">{identify}</span>
                <span className="location">{location}</span>
            </div>
            <img className="moreOption" src="../images/option.png"/>
        </div>
    )
}

export default FeedHeader;