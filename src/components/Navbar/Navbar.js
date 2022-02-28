import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul className='navbar'>
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