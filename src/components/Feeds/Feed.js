import React from "react";
import MainImage from "./MainImage/MainImage";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedIcon from "../../components/Feeds/FeedIcon/FeedIcon";


function Feed({feed}){
    return(
        <>
            <FeedHeader identify={feed.identify} location={feed.location} authorImg={feed.authorImg}/> 
            <MainImage mainImg={feed.mainImg} />
            <FeedIcon />
           
        </>
        
    )
}

export default Feed;