import React from 'react'

export const NavBar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-menu'>
                <li className="nav-item"><a className="nav-link" href="#">Transmission System</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Steering System</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Suspension System</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Brake System</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Engine System</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Electric System</a></li>
            </ul>
        </nav>
    )
}
