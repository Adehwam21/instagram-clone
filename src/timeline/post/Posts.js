import React from 'react'
import {Avatar} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material'

function Posts() {
  return (
    <div className='post'>
        <div className='post-header'>
            <div className='post-header-author'>
                <Avatar>A</Avatar>
                aaron__•<span>9h</span>
            </div>

            <MoreHorizIcon/>
            
        </div>
        <div className='post-image'></div>
        <div className='post-footer'></div>
    </div>
  )
}

export default Posts