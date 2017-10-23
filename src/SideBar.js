import React from 'react'

import './SideBar.css'

const SideBar = ()=>{
    return (
       <nav className="Sidebar">
           <h1 className="SideId">Xbot</h1>
           <div className = "SideInputText"> 
                <input
                    className = "SideInputfield"
                    placeholder = "Respond...">
                </input>
                <button
                    type="button"
                    className="Enterbutton">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
            </div>
       </nav> 
    )
}

export default SideBar