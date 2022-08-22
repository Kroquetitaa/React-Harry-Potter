import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul className='navbarList'>
                <li>
                    <Link to='/' className='nav--logo'>
                        <img src="https://frikerio.files.wordpress.com/2019/09/harry-potter-logo.png?w=810" alt="logo" className='nav--logo'/>
                    </Link>
                </li>
                <li>
                    <Link to='/characters' className='nav--characters'>
                        <p className='nav--characters'>Personajes</p>
                    </Link>
                </li>
                <li>
                    <Link to='/teachers' className='nav--teachers'>
                        <p className='nav--teachers'>Profesores</p>
                    </Link>
                </li>
                <li>
                    <Link to='/houses' className='nav--houses'>
                        <p className='nav--houses'>Casas</p>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar