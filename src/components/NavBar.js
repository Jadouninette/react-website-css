import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div>
      <>
      <nav className='navbar'>
        <div className='navebar-container'>
        <link to='/' className='navbar-logo'>
            TRLV
        </link>
        </div>
      </nav>
      </>
    </div>
  )
}

export default NavBar
