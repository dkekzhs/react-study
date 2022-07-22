import React, { useRef , useState } from 'react'
import "./Video.css";
import VideoFooter from "./VideoFooter";
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
       loop
        src="https://v16-webapp.tiktok.com/bf331a493c27257787891334cae7ee95/62dad4cb/video/tos/useast2a/tos-useast2a-pve-0068/4c94249ac235424daf8e6f3cee2b2810/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=944&bt=472&btag=80000&cs=0&ds=3&ft=TkXt21CmvjVQ9O.6ZSTsdHc64i_a7uwQAGEe8bSya9&mime_type=video_mp4&qs=0&rc=OTlpZWlmN2g2OGhoZTgzZ0Bpajl3bGc6Zm1vPDMzNzczM0AzXjBhYWE2NjQxLzMtLTNeYSNtc2szcjRnYHJgLS1kMTZzcw%3D%3D&l=20220722104708010245244165270510CD">
          
        </video>
    <VideoFooter/>
    </div>
  )
}

export default Video
