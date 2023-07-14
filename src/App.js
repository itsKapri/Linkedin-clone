import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Feeds from './Page/Feeds';
import Login from './Component/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Feeds/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);
function App() {
  return (
    
    <div className="app_wrapper">
    <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
