import React ,{ useEffect }from 'react'
import "./Footer.css"

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid, Slider } from "@mui/material/";

import { useDataLayerValue } from "./DataLayer";

function Footer({spotify}) {
  const [{item , playing } ,dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });

  }, [spotify]);

  
  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };
  return (
    <div className='footer'>
        <div className="footer__left">
          <img className='footer__albumLogo' 
          src='https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E' 
          alt=''/>
          <div className='footer__songInfo'>
            <h4>Yeah</h4>
            <p>zzzz</p>
          </div>
        </div>
        <div className="footer__center">
            <ShuffleIcon className='footer__green'/>
            <SkipPreviousIcon className='footer__icon'/>
            {playing?
            (<PauseCircleOutlineIcon className='footer__icon' fontSize='large' onClick={handlePlayPause}/>):
            (<PlayCircleOutlineIcon className='footer__icon' fontSize='large' onClick={handlePlayPause}/>)}

            <SkipNextIcon className='footer__icon'/>
            <RepeatIcon className='footer__green'/>
        </div>
        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
      
    </div>
  )
}

export default Footer;