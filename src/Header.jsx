import React from 'react'

export default function Header({ toggle, on, isMobile }) {
    console.log(`isMobile : ${isMobile}`)
    console.log(`on : ${on}`)
    return (
        <>
            <header>
                <a href='#' className='logo' >Company</a>
                {(!on && isMobile) && <svg onClick={toggle} className="open" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                    <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"></path>
                </svg>}
                {(on && isMobile) && <nav>
                    <svg onClick={toggle} fill="#dcd6f7" className="close" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Contact</a></li>
                        <li><a>About</a></li>
                        <li><a>Privacy</a></li>
                    </ul>
                </nav>}
                {(!isMobile) && <nav>
                    <svg onClick={toggle} fill="#dcd6f7" className="close" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="active">About</a></li>
                        <li><a>Privacy</a></li>
                    </ul>
                </nav>}
            </header>
        </>
    )
}