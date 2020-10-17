import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src="/logo.png" className="logo" />
                <h1>React <span>Movie</span> </h1>
            </div>
            
                <input className="search" type="text" placeholder="Search a Movie..." />
            
        </div>
    )
}

export default Header
