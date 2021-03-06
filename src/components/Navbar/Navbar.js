import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <nav>
                    <div className="brand">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#e7f5ff"
                             viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <line x1="128" y1="128" x2="216" y2="128" fill="none" stroke="#e7f5ff"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="128" y1="64" x2="216" y2="64" fill="none" stroke="#e7f5ff" stroke-linecap="round"
                                  stroke-linejoin="round" stroke-width="16"></line>
                            <line x1="128" y1="192" x2="216" y2="192" fill="none" stroke="#e7f5ff"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                            <polyline points="92 48 57.3 80 40 64" fill="none" stroke="#e7f5ff" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="16"></polyline>
                            <polyline points="92 112 57.3 144 40 128" fill="none" stroke="#e7f5ff"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                            <polyline points="92 176 57.3 208 40 192" fill="none" stroke="#e7f5ff"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
                        </svg>
                        <h2>Todoly</h2>
                    </div>
                    <ul className="navbar">
                        <li><Link to="/">
                            Home
                        </Link>
                        </li>
                        <li><Link to="create">
                            Create
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar