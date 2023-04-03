import React from 'react'
import "./Posts.css";
import {Avatar} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import "./timeline/Timeline.js"
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'

function Posts({user, postContent, likes, timestamp}) {
  return (
    <div className='post'>
        <div className='post-header'>
            <div className='post-header-author'>
                <Avatar sx={{marginRight: 1}}>{user.charAt(0).toUpperCase()}</Avatar>
                {user}.{" "} • <span>{timestamp}</span>
            </div>
            <MoreHorizIcon/>
        </div>

        <div className='post-image'>
          <img src={postContent} alt='phpto'/>
        </div>

        <div className='post-footer'>

          <div className='post-footer-icon'>

            <div className='post-icon-main'>
              <FavoriteBorderIcon className='post-icon' sx={{fontSize: 25}} />
              <TbIcons.TbMessageCircle2 className='post-icon' size="1.55rem" />
              <BsIcons.BsSend className='post-icon' size="1.3rem"/>
            </div>

            <div className='post-icon-save'>
              <BiIcons.BiBookmark className='post-icon' size="1.3rem"/>
            </div>

          </div>
          <p>Liked by {likes} others</p>
        </div>
    </div>
  )
}

export default Posts