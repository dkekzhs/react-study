import React , {useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import './App.css';
import Login from './Login';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user , token , music} , dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    
    if(_token) {
    
      dispatch({
        type : "SET_TOKEN",
        token : _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        dispatch({
          type : 'SET_USER',
          user : user,
          
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      })
      spotify.getPlaylist("24nghhlXn2LQZzoulW22dp")
      .then( (response) =>
        dispatch({
          type : "SET_MUSIC",
          music : response,
        })
      )
    }

   },[user,token,music,dispatch]);
  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify}/>) : (<Login/>)
      }
    </div>
  );
}

export default App;
