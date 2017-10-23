import React from 'react'

import './Header.css'

const Header = () => {
    return(
        <header className="App-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckFsrLaBf_-Q97dk9Swl_LNQZ4lkwKMBR82wadIs0dg9dT_VS" alt="Xtern logo" className="imagelogo"/>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">OSXtern</h1>
            <button
                type="button"
                className="SignoutButton">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            </button>
        </header>
    )
}

export default Header