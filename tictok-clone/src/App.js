import './App.css';
import db from "./firebase";
import Video from './Video';
import React , { useState ,useEffect } from "react";


function App() {
  const [videos , setVideos ] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="App">
      <h1>hello tic tok clone</h1>
      <div className="app__videos">
      {videos.map(({url, channel, description, song, likes, shared, messages})=> (<Video
       key={url}
       url={url}
        channel={channel}
        description={description}
        song={song}
        likes={likes}
        shared={shared}
        messages={messages}
      />))}
      </div>
    </div>
  );
}

export default App;
