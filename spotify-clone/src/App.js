import React , {useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import './App.css';
import Login from './Login';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user , token} , dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash =  getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token) {
      dispatch({
        tpye : "SET_TOKEN",
        token : _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        dispatch({
          type : 'SET_USER',
          user : user,
          
        })
      })

      console.log("token : " + token );
      console.log("user : "  + user)
    }

   },[user,token,dispatch]);
  return (
    <div className="App">
      {
        token ? (<Player/>) : (<Login/>)
      }
    </div>
  );
}

export default App;
