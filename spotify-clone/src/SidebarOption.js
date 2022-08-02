import React  from 'react'
import "./SidebarOption.css";
import { useDataLayerValue } from "./DataLayer";
function SidebarOption({title, Icon, action, spotify }) {
  const [{music} , dispatch] = useDataLayerValue();

  const showList = () =>{
    spotify.getPlaylist(action)
    .then( (response) =>
      dispatch({
        type : "SET_MUSIC",
        music : response,
      })
    )  
  }

  return (
    <div className='sidebarOption' onClick={showList}>
      {Icon && <Icon className="sidebarOption__icon"/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      
      
    </div>
  )
}

export default SidebarOption
