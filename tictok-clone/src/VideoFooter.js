import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";


function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className="videoFooter__text">
        <h3>@dkkzhs</h3>
        <p>this is a description</p>
        <MusicNoteIcon/>
        <Ticker className="videoFooter_ticker">
        {({ index }) =>(
          <>
            <p>YOoo Whats up guys </p>
          </>
        )}
        </Ticker>
      </div>
      <img className='videoFooter__record'
       src='https://static.thenounproject.com/png/934821-200.png' alt=''></img>

   
    </div>
  )
}

export default VideoFooter
