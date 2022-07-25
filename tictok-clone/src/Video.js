import React, { useRef , useState } from 'react'
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from './VideoSideBar';

function Video({
  url,
  channel,
  description,
  song,
  likes,
  shared,
  messages
}) {
  const videoRef = useRef(null);
  const [play, setplay] = useState(false);

  const onVideoPress =() =>{
    if(play){
      videoRef.current.pause();
      setplay(false);
    }
    else{
      videoRef.current.play();
      setplay(true);
    }
  
  };

  return (
    <div className='video'>
       <video
       className='video__player'
       onClick={onVideoPress}
       ref={videoRef}
       loop
        src={url}> 
        </video>
    <VideoFooter channel={channel} description ={description} song ={song}/>
    <VideoSideBar likes={likes} shared={shared} messages={messages}/>
    </div>
  )
}

export default Video
