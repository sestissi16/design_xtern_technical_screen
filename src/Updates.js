import React from 'react'

import './Updates.css'

const Updates = () => {
    return(
        <div className = "Mainbody">
            <h4>I'm where the updates will go!</h4>
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