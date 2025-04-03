import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const { setCurrency } = useContext(CoinContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to={'/'} className="logo-link">
          <img src={logo} alt="CryptoSphere Logo" className='logo' />
        </Link>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/markets'} className={({isActive}) => isActive ? 'active-link' : ''}>Markets</NavLink>
            </li>
            <li>
              <NavLink to={'/portfolio'} className={({isActive}) => isActive ? 'active-link' : ''}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to={'/news'} className={({isActive}) => isActive ? 'active-link' : ''}>News</NavLink>
            </li>
          </ul>
          
          <div className="nav-right">
            <div className="currency-selector">
              <select onChange={currencyHandler} className="currency-dropdown">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
            <button className="signup-button">
              Sign Up <img src={arrow_icon} alt="" className="arrow-icon"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar