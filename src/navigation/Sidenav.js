import React from 'react';
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import SearchIcon from "@mui/icons-material/Search";
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
                <HomeIcon/>
                <span>Home</span>
            </button>

            <button className='side-button'>
                <SearchIcon/>
                <span>Search</span>
            </button>

            <button className='side-button'>
                <ExploreIcon/>
                <span>Explore</span>
            </button>

            <button className='side-button'>
                <CgIcons.CgClapperBoard/>
                <span>Reels</span>
            </button>

            <button className='side-button'>
                <FaIcons.FaFacebookMessenger/>
                <span>Messages</span>
            </button>

            <button className='side-button'>
                <FavoriteBorderIcon/>
                <span>Notifications</span>
            </button>

            <button className='side-button'>
                <CgIcons.CgAddR/>
                <span>Create</span>
            </button>

            <button className='side-button'>
                <Avatar/>
                <span>Profile</span>
            </button>
        </div>

        <div className='side-more'>
            <button className='side-button'>
                <MenuIcon/>
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default Sidenav;