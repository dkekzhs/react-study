import React, { useRef , useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
function Video() {
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
        src='https://v16-webapp.tiktok.com/c83cd6dc61e3dea1fde6f16a9089e7a2/62d99cd4/video/tos/alisg/tos-alisg-pve-0037/5144d8ea141146a9b0abe179102c1790/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2760&bt=1380&btag=80000&cs=0&ds=3&ft=z_piDPd82NvjVb4DqOzfuCYQFAe4nRQjlu-~ItOB&mime_type=video_mp4&qs=0&rc=NDw5ZWg4NzY6OjM6Mzc8OUBpam1oaTo6ZmtnZTMzODgzNEA2LzE0YTU2XzExMGE1YjI1YSM0LmhgcjQwcGBgLS1kLy1zcw%3D%3D&l=20220721123646010251003189211702CE'></video>
      <VideoFooter/>
    </div>
  )
}

export default Video
