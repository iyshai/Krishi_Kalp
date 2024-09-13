import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice' 
// import logo from '../../assets/logo.png''
import logo1 from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <nav className={classes.navbar}>
      <a className={classes.logo} href="/">
        <img src={logo1} alt="Logo" className={classes.logoImage} />
      </a>
      <div className={classes.navItems}>
        <ul className={classes.navbarList}>
          <li className={classes.navbarItem}>
            <Link to="/" className={classes.active}>
              Home
            </Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/community">Community</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/weather">Weather</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/mandi-dam">Mandi Dam</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/yojna">Yojna</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/dhan-sahyata">Dhan Sahyata</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/login">LogIn</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/dukan">Dukan</Link>
          </li>
          <li className={classes.navbarItem}>
            <Link to="/chat-bot">Chat-bot</Link>
          </li>
        </ul>
      </div>
      <div className={classes.mobileMenu}>
        <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i>
      </div>
    </nav>
  );
}

export default Navbar