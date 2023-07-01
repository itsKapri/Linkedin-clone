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
    <Post name="L'Oréal" description="React is osm" message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nam voluptatem deserunt beatae" photoURL="https://media.licdn.com/dms/image/C5603AQF7F4bTxUnxRA/profile-displayphoto-shrink_100_100/0/1610271757735?e=1693440000&v=beta&t=ZZMaCqwo9v23e8cCMTDKBjQSe_VR6SbKWLWIwqVe3h0"  postMedia="https://media.licdn.com/dms/image/D5622AQEUOZA8vDwz6g/feedshare-shrink_800/0/1688144678385?e=1691020800&v=beta&t=QaTgIa74tTTidTtHfJp1sgrVbYalGrFWwO7AVZLuFnY"/>
    <Post name="Harley Ferguson" description="React is osm" message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nam voluptatem deserunt beatae" photoURL="https://media.licdn.com/dms/image/C4D03AQG80WkU57Xrfg/profile-displayphoto-shrink_100_100/0/1655990143525?e=1693440000&v=beta&t=3F87WXcQLxklBc_tib36rA2uRNA4PCzkK0qXsAF1v_E"  postMedia="https://wp.technologyreview.com/wp-content/uploads/2022/07/government-tech-insider.png"/>


   </div>

  )
}

export default Feed