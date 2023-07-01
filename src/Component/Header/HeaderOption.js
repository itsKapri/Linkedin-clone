import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, onClick }) {  
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <AccountCircleIcon className="headerOption_icon" />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption