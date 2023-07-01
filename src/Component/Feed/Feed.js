import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Feed.css';
import Post from '../Post/Post';
function Feed() {
  return (
   <div className="feed">
    <div className="feed_input">
    <div className="feed_form">
        <AccountCircleIcon></AccountCircleIcon>
        <form action="">
            <input type="text" placeholder='start a post' />
            <input type="submit" />
        </form>
        </div>
    <div className="feed_options">
        <div className="option">
            <ImageIcon style={{width:"30px", color:"#378fe9"}}></ImageIcon>
            <span>Photo</span>
        </div>
        <div className="option">
            <YouTubeIcon style={{width:"30px", color:"#5f9b41"}}></YouTubeIcon>
            <span>Video</span>
        </div>
        <div className="option">
           <TodayIcon style={{width:"30px", color:"#c37d16"}}></TodayIcon>
            <span>Event</span>
        </div>
        <div className="option">
            <AssignmentIcon style={{width:"30px", color:"#e16745"}}></AssignmentIcon>
            <span>Write article</span>
        </div>
    </div>
    </div>
    <Post/>
   </div>

  )
}

export default Feed