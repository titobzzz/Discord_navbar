import React from "react"
import Chatsec from './Chatsec';
import Sidebar from "./sidebar"
import Navbar from "./navbar"
import './App.css';
import "./index.css"

function App() {
  return(
    <div className="flex">
          <Navbar/>
          <Sidebar/>        
          <Chatsec/>
  </div>
  )
}
export default App;
