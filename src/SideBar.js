import React from 'react'

import './SideBar.css'

const SideBar = ()=>{
    return (
       <nav className="Sidebar">
           <div className="Title">I'm a sidebar</div>
           <div className = "SideInputText"> 
                <textarea
                    className = "SideInputfield"
                    placeholder = "Respond...">
                </textarea>
            </div>
       </nav> 
    )
}

export default SideBar