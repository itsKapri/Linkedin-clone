import React from 'react';
// import Header from './Component/Header/Header';
// import Sidebar from './Component/Sidebar/Sidebar';
// import Feed from './Component/Feed/Feed';
// import Widgets from './Component/Widgets/Widgets';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Feeds from './Page/Feeds';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Feeds/>
  },
]);
function App() {
  return (
    
    <div className="app_wrapper">
    {/* <Header/>
    <div className="app_body">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
    */}
   
    <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
