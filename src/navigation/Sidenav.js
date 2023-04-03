import React from 'react';
import "./Sidenav.css";
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from '@mui/material';

//MdIcons.MdOutlineExplore - explore 
//GrIcons.GrHomeRounded - home
//FaIcons.FaFacebookMessenger - messages
//FiIcons.FiHeart - notifications
//CgIcons.CgAddR - create
//AiIcons.AiOutlineMenu - more
//CgIcons.CgClapperBoard - reels

function Sidenav() {
  return (
    <div className='sidenav'>
        <div>
            <img className='sidenav-logo' src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="Instagram Logo Black And Ahite - Instagram Word Logo Png@pngkey.com"/>
        </div>
        
      
        <div className='sidenav-buttons'>

            <button className='side-button'>
                <MdIcons.MdHomeFilled size="1.75rem" color='white'/>
                <span><b>Home</b></span>
            </button>

            <button className='side-button'>
                <FiIcons.FiSearch size="1.55rem"/>
                <span>Search</span>
            </button>

            <button className='side-button'>
                <ExploreIcon sx={{fontSize: 25}}/>
                <span>Explore</span>
            </button>

            <button className='side-button'>
                <CgIcons.CgClapperBoard size="1.55rem"/>
                <span>Reels</span>
            </button>

            <button className='side-button'>
                <FaIcons.FaFacebookMessenger size="1.55rem"/>
                <span>Messages</span>
            </button>

            <button className='side-button'>
                <FavoriteBorderIcon sx={{fontSize: 25}} />
                <span>Notifications</span>
            </button>

            <button className='side-button'>
                <CgIcons.CgAddR size="1.55rem"/>
                <span>Create</span>
            </button>

            <button className='side-button'>
                <Avatar sx={{width: 26, height: 26, paddingLeft: 0, paddingRight:0}}>A</Avatar>
                <span sx={{marginLeft: 1}}>Profile</span>
            </button>
        </div>

        <div className='side-more'>
            <button className='side-button'>
                <MenuIcon sx={{fontSize: 25}}/>
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default Sidenav;