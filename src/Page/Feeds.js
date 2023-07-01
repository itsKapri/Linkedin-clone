import React from 'react'
import Header from '../Component/Header/Header'
import Sidebar from '../Component/Sidebar/Sidebar'
import Feed from '../Component/Feed/Feed'
import Widgets from '../Component/Widgets/Widgets'

function Feeds() {
  return (
    <>
    <Header/>
    <div className="app_body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
        </div>
    </>
  )
}

export default Feeds