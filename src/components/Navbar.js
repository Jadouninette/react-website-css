import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click) 
  // funtion that change the actual value of click to the opposite to reset the value
  const closeMobileMenu = () => setClick(false);

  // function 
  return (
    <div>
      <>
      <nav className='navbar'>
        <div className='navebar-container'>
        <Link to='/' className='navbar-logo'>
          <FontAwesomeIcon icon={faHandSpock} />
           Discovery  
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'} />

        </div>
        <ul className= {click ? 'nav-menu active' : 'nav-menu'} > 
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Galerie
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Bricolage
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                ML
            </Link>
          </li>
        </ul>
        </div>
      </nav>
      </>
    </div>
  )
}

export default NavBar
