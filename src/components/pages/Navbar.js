import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md' // Icon
import {FaBars,FaTimes} from 'react-icons/fa' // Icon

import {Button } from '../pages/Button'
import '../pages/Navbar.css'
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const [click , setClick ] = useState(false) //Usestate intialization
    const [button, setButton] = useState(true)

    const handleClick = () => setClick (!click) // handle function

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false)
        }else {
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton)
    return (
        <>
        <IconContext.Provider value = {{color : '#fff'}}>
        {/* Nav-Bar Code */}
        <div className="navbar">
            <div className = "navbar-container container">
             {/* Logo */}
                <Link to ='/' className ="navbar-logo"  onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon' />
                    KRUJOY
                </Link>
                 {/* Nav-Bar Handle Click */}
                <div className="menu-icon" onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />} 
                </div>
                 {/* Nav-Bar Home*/}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className ="nav-item">
                        <Link to='/' className ="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className ="nav-item">
                        <Link to='/services' className ="nav-links" onClick={closeMobileMenu} >Services</Link>
                    </li>
                    <li className ="nav-item">
                        <Link to='/products' className ="nav-links" onClick={closeMobileMenu}>Products</Link>
                    </li>
                    <li className ="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>SIGNUP</Button>
                            </Link>
                        ):(
                            <Link to='/sign-up' className ="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize ='btn--mobile' onClick={closeMobileMenu}>
                                    SIGNUP
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
        </div>
        </div> 
        </IconContext.Provider> 
        </>
    )
}

export default Navbar
