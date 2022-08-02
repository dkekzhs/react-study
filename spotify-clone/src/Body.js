import React from 'react'
import "./Body.css";
import Header from './Header';
import {useDataLayerValue} from "./DataLayer"
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";


function Body({spotify}) {
  const [ {music, device } , dispatch] = useDataLayerValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`]
      })
      .then((r) => {

        spotify.getMyCurrentPlayingTrack().then((r) => {

          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src={music?.images[0].url} alt=''/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Weekly</h2>
          <p>{music?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className='body__shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon/>

        </div>
        {music?.tracks.items.map((item => 
          <SongRow key ={item.track.id}  playSong={playSong} track={item.track}/>))}
      </div>
    </div>
  )
}

export default Body
