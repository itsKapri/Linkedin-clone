import React from 'react';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Feed from './Component/Feed/Feed';
import Widgets from './Component/Widgets/Widgets';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="app_wrapper">
    <Header/>
    <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widgets/>

      <Footer/>
    </div>
 
    </div>
    
  );
}

export default App;
