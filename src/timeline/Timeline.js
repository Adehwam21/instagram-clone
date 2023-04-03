import React, { useState } from 'react';
import "./Timeline.css";
import Suggestions from "../timeline/Suggestions";
import Posts from '../timeline/post/Posts'

function Timeline() {
  const [post, setpost] = useState([
    {
      user: "oliver",
      postContent: "https://w0.peakpx.com/wallpaper/708/324/HD-wallpaper-guitar-musical-instrument-headphones-music.jpg",
      likes: 23,
      timestamp: "6h"
    },
    {
      user: "baeka",
      postContent: "https://w0.peakpx.com/wallpaper/873/331/HD-wallpaper-dog-samoyed-dog-white-fluffy-protruding-tongue.jpg",
      likes: 84,
      timestamp: "4d"
    },
    {
      user: "eren_",
      postContent: "https://w0.peakpx.com/wallpaper/485/713/HD-wallpaper-programmer-computer-technology.jpg",
      likes: 12,
      timestamp: "30min"
    },
    {
      user: "twix",
      postContent: "https://w0.peakpx.com/wallpaper/153/381/HD-wallpaper-basketball-hoop-sneakers-net-shield-basketball.jpg",
      likes: 49,
      timestamp: "2h"
    }
  ])
  return (
    <div className='timeline'>
        
        <div className='timeline-left'>
            <div className='timeline-post'>

                {post.map((posts) => (
                  <Posts
                    user = {posts.user}
                    postContent = {posts.postContent}
                    likes = {posts.likes}
                    timestamp = {posts.timestamp}
                  />
                ))}
            </div>
        </div>

        <div className='timeline-right'><Suggestions/></div>
    </div>
  )
}

export default Timeline