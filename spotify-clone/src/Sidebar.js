import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

function Sidebar({spotify}) {
    const [{playlists} , dispatch]= useDataLayerValue();


  return (
    <div className='sidebar'>
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

    <SidebarOption spotify={spotify} title="Home" Icon={HomeIcon} action ="home"/>
    <SidebarOption spotify={spotify} title="Search" Icon={SearchIcon} action ="search"/>
    <SidebarOption spotify={spotify} title="Your Library" Icon={LibraryMusicIcon} action ="Libaray"/>   

    <br/>
    <strong className='sidebar__title'>PLAYLIST</strong>
    {playlists?.items?.map(playlists =>(
        <SidebarOption spotify={spotify} key = {playlists.id} title={playlists.name} action={playlists.id}/>
    ))}

    <hr/>

    

    </div>
  )
}

export default Sidebar
