
import React from 'react';
import './VideoItem.css'
//mesa sto className image mporw na valw "avatar"
const VideoItem = ({video , onVideoSelect}) =>{
    return(
        <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image" alt='' src={video.snippet.thumbnails.medium.url} /> 
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        
        </div>
    );
}
export default VideoItem;
