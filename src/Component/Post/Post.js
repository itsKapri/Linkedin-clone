import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.css';
function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <div className="post_headerLeft">
                    <AccountCircleIcon style={{ color: "gray" }}>
                    </AccountCircleIcon>
                    <div className="post_profile_details">
                        <h3>Nilesh Kapri</h3>
                        <p>We are at Raw</p>
                    </div>
                </div>
                <MoreVertIcon style={{ width: "30px" }}></MoreVertIcon>
            </div>

            <div className="post_body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi ad accusamus impedit tempora aliquid vel provident accusantium molestias. Voluptate expedita amet non asperiores id laboriosam quos accusamus perspiciatis officia.
                </p>
                <div className="img">
                    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
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