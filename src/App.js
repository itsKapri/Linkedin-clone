import React from 'react';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Feed from './Component/Feed/Feed';

function App() {
  return (
    <div className="app_wrapper">
    <Header/>
    <div className="app_body">
      <Sidebar/>
      <Feed/>
    </div>
    </div>
    
  );
}

export default App;
