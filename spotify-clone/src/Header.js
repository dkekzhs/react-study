import React from 'react'
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search"
import { Avatar } from "@mui/material"
import {useDataLayerValue} from "./DataLayer"

function Header({spotify }) {
    const [{ user }, dispatch ] = useDataLayerValue();
  return (
    <div className='header'>
      <div className="header__left">
        <SearchIcon/>
        <input
            placeholder='Search Artist ,songs'
            type="text"/>

      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt=""/>
        <h4>zzzzzzzzz</h4>

      </div>
    </div>
  )
}

export default Header
