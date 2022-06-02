import React from 'react';
import "./MainImage.scss";

function MainImage({mainImg}){
    return(
        <img className="new-photo" src={mainImg} alt="new-photo"/>
        
    )
}

export default MainImage;
