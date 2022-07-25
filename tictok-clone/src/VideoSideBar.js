import React , {useState} from 'react'
import "./VideoSideBar.css"

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar({likes , shared , messages}) {
    const [liked , setLiked] = useState(false);
  return (
    <div className='videoSideBar'>
        <div className='videoSideBar__option'>
            {liked ? ( <FavoriteIcon
            onClick ={e => setLiked(false)} />) 
            :  (<FavoriteBorderIcon
                onClick ={e => setLiked(true)} 
            />)}
            
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSideBar__option'>
            <MessageIcon/>
            <p>{messages}</p>
        </div>
        <div className='videoSideBar__option'>
            <ShareIcon/>
            <p>{shared}</p>
        </div>
    </div>
  )
}

export default VideoSideBar
