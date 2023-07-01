import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebar_profile">
                <img
                    src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
                    alt="cover pics"
                />
                <div className="sidebar_details">
                    <AccountCircleIcon ></AccountCircleIcon>
                    <h4>Nilesh Kapri</h4>
                    <p>Web developer</p>
                </div>
                <div className="sidebar_analays">
                    <span><b>Analytics & tolls</b></span><br />
                    <span className="small " >20 post impression</span>
                    <div className='line'></div>
                </div>
                <div className="profile_stats">
                    <span style={{marginTop:"5px"}}>Who viewed your profile</span>
                    <span className="stat_number">20</span>
                </div>
                <div className="profile_stats">
                    <span>Connection<br/><b>Grow your Network</b></span>
                    <span className="stat_number">200</span>
                </div>

            </div>
            <div className="sidebar_recent">
                <p>Recent</p>
                <p className="hash"><span>#</span>React</p>
                <p className="hash"><span>#</span>Java</p>
                <p className="hash"><span>#</span>Javascript</p>
                <p className="hash"><span>#</span>C++</p>
                <p className="hash"><span>#</span>Programming</p>




            </div>
        </div>
    )
}

export default Sidebar