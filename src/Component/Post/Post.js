import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.css';
function Post({name,description, message, photoURL,postMedia}) {
    return (
        <div className="post">
            <div className="post_header">
                <div className="post_headerLeft">
                    <img src={photoURL} style={{ width: "43px", height: "43px", borderRadius: "50%" }}alt="" srcset="" />
                    <div className="post_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVertIcon style={{ width: "30px" }}></MoreVertIcon>
            </div>

            <div className="post_body">
        <p>{message}</p>
        {postMedia && (
          <div className="img">
            <img src={postMedia} alt="" />
          </div>
        )}
      </div>
            <div className="post_footer">
                <div className="post_footer_option">
                    <ThumbUpIcon></ThumbUpIcon>
                    <span>Like</span>
                </div>
                <div className="post_footer_option">
                    <CommentIcon></CommentIcon>
                    <span>Comment</span>
                </div>
                <div className="post_footer_option">
                    <ShareIcon></ShareIcon>
                    <span>Share</span>
                </div>
                <div className="post_footer_option">
                    <SendIcon></SendIcon>
                    <span>Send</span>
                </div>
            </div>
        </div>
        
    )
}

export default Post