import React from 'react';
import "./Timeline.css";
import Suggestions from "../timeline/Suggestions";
import Posts from '../timeline/post/Posts'

function Timeline() {
  return (
    <div className='timeline'>
        
        <div className='timeline-left'>
            <div className='timeline-post'>
                <Posts/>
            </div>
        </div>

        <div className='timeline-right'><Suggestions/></div>
    </div>
  )
}

export default Timeline