import React from 'react'

import './Updates.css'

const Updates = () => {
    return(
        <div className = "Mainbody">
            <h1 className="UpdateId">Updates</h1>
            <div className="Update1">
                <h3>This here is an Update</h3>
                <h7>This is what it could look like</h7>
            </div>
            <div className="Update3">
                <h3>Ditto</h3>
            </div>
            <div className = "InputText"> 
                <input
                    className = "Inputfield"
                    placeholder = "Write your update here...">
                </input>
                <button
                    type="button"
                    className="EnterUpdate">
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default Updates