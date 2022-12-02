import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click) 
  // funtion that change the actual value of click to the opposite to reset the value
  const closeMobileMenu = () => setClick(false);

  const showButton = () => { // FIXME : needt ofind a more elegant way to know is the device is a smartphone or a PC  
    if (window.innerWidth <= 960) { // Value 960 is to find a mobile
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton); 

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
        {button && <Button buttonStyle='btn--outline'>FOLLOW ME</Button>}
        </div>
      </nav>
      </>
    </div>
  )
}

export default NavBar
